"use client";

import { useEffect, useRef, useState } from "react";

import {
  addDoc,
  collection,
  query,
  orderBy,
  limit,
  onSnapshot,
  serverTimestamp,
  deleteDoc,
  doc,
} from "firebase/firestore";

import {
  onAuthStateChanged,
  signOut,
  User,
} from "firebase/auth";

import Image from "next/image";

import {
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  X,
} from "lucide-react";

import { handleRedirectResult } from "@/lib/auth";

import { db, auth } from "@/lib/firebase";
import { loginWithGoogle } from "@/lib/auth";

import { motion } from "framer-motion";

type Review = {
  id: string;
  name: string;
  text: string;
  uid: string;
  photo?: string;
  createdAt?: {
    seconds: number;
  };
};

export default function ReviewsSection() {
  const [user, setUser] =
    useState<User | null>(null);

  const [reviews, setReviews] =
    useState<Review[]>([]);

  const [text, setText] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [openModal, setOpenModal] =
    useState(false);

  const [canScrollLeft, setCanScrollLeft] =
    useState(false);

  const [canScrollRight, setCanScrollRight] =
    useState(false);

  const sliderRef =
    useRef<HTMLDivElement | null>(null);

  // AUTH
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
    });

    const initRedirect = async () => {
      const user = await handleRedirectResult();

      if (user) {
        setUser(user);
      }
    };

    initRedirect();

    return () => unsub();
  }, []);

    // CHECK SCROLL
  function checkScroll () {
    const slider = sliderRef.current;

    if (!slider) return;

    setCanScrollLeft(
      slider.scrollLeft > 0
    );

    setCanScrollRight(
      slider.scrollLeft +
        slider.clientWidth <
        slider.scrollWidth - 5
    );
  };

  // REVIEWS
  useEffect(() => {
    const q = query(
      collection(db, "reviews"),
      orderBy("createdAt", "desc"),
      limit(50)
    );

    const unsub = onSnapshot(q, (snap) => {
      const data = snap.docs.map((d) => ({
        id: d.id,
        ...d.data(),
      })) as Review[];

      setReviews(data);

      setTimeout(() => {
        checkScroll();
      }, 100);
    });

    return () => unsub();
  }, []);


  // LOGIN
  const handleLogin = async () => {
    await loginWithGoogle();
  };

  // LOGOUT
  const handleLogout = async () => {
    await signOut(auth);
  };

  // DELETE REVIEW
  const handleDelete = async (
    reviewId: string
  ) => {
    try {
      await deleteDoc(
        doc(db, "reviews", reviewId)
      );
    } catch (e) {
      console.error(e);
    }
  };

  // SUBMIT
  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    if (!text.trim()) return;

    if (text.length > 300) return;

    setLoading(true);

try {
  let currentUser = auth.currentUser;

  if (!currentUser) {
    currentUser = await loginWithGoogle();
  }

  if (!currentUser) {
    setLoading(false);
    return;
  }

  // ✅ 1. створюємо відгук
  const docRef = await addDoc(collection(db, "reviews"), {
    name: currentUser.displayName || "Anonymous",
    text: text.trim(),
    uid: currentUser.uid,
    photo: currentUser.photoURL || "",
    createdAt: serverTimestamp(),
  });

  // ✅ 2. ВІДПРАВКА В TELEGRAM
  await fetch("/api/telegram", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: `
⭐ <b>Новий коментар</b>

👤 ${currentUser.displayName || "Anonymous"}
💬 ${text.trim()}
🆔 ID: ${docRef.id}
      `,
    }),
  });

  setText("");
  setOpenModal(false);
} catch (e) {
  console.error(e);
}

    setLoading(false);
  };

  // DATE
  const formatDate = (
    timestamp?: { seconds: number }
  ) => {
    if (!timestamp?.seconds) return "";

    return new Date(
      timestamp.seconds * 1000
    ).toLocaleDateString("uk-UA", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // SLIDER
  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -320,
      behavior: "smooth",
    });

    setTimeout(() => {
      checkScroll();
    }, 400);
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 320,
      behavior: "smooth",
    });

    setTimeout(() => {
      checkScroll();
    }, 400);
  };

  return (
    <>
      <section id="reviews" className="w-full py-16 bg-[#fdf3e4] overflow-hidden relative">

        <div className="w-[92%] mx-auto relative">

          {/* HEADER */}
          <div className="relative mb-12">

            <h2 className="text-center text-4xl md:text-5xl font-bold uppercase">
              Відгуки
            </h2>

            {/* ADD BUTTON */}
            <motion.button
              onClick={() => setOpenModal(true)}
              title="Додати коментар"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                delay: 0.25, 
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-[#FF8A3D] text-white flex items-center justify-center shadow-lg"
            >
              <Plus size={28} />
            </motion.button>

          </div>

          {/* SLIDER */}
          <div className="relative">

            {/* LEFT */}
            <button
              onClick={scrollLeft}
              disabled={!canScrollLeft}
              className={`absolute left-[-10px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition
              
              ${
                canScrollLeft
                  ? "bg-white shadow-md hover:bg-gray-100"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            {/* REVIEWS */}
            <div
              ref={sliderRef}
              onScroll={checkScroll}
              className="flex gap-5 overflow-x-auto scroll-smooth no-scrollbar px-8 pb-6 pt-2"
            >

              {reviews.map((r) => (
                <div
                  key={r.id}
                  className="min-w-[300px] max-w-[300px] bg-white rounded-3xl p-5 shadow-sm flex-shrink-0 relative"
                >

                  {/* DELETE */}
                  {user?.uid === r.uid && (
                    <button
                      onClick={() =>
                        handleDelete(r.id)
                      }
                      className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  )}

                  {/* USER */}
                  <div className="flex items-center gap-3 mb-4">

                    {r.photo ? (
                      <Image
                        src={r.photo}
                        alt={r.name}
                        width={46}
                        height={46}
                        className="rounded-full object-cover w-[46px] h-[46px]"
                      />
                    ) : (
                      <div className="w-[46px] h-[46px] rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                        {r.name?.charAt(0)}
                      </div>
                    )}

                    <div>
                      <p className="font-semibold text-sm text-black">
                        {r.name}
                      </p>

                      <p className="text-xs text-gray-500 mt-1">
                        {formatDate(
                          r.createdAt
                        )}
                      </p>
                    </div>

                  </div>

                  {/* TEXT */}
                  <p className="text-sm text-gray-700 leading-7 break-words">
                    {r.text}
                  </p>

                </div>
              ))}

            </div>

            {/* RIGHT */}
            <button
              onClick={scrollRight}
              disabled={!canScrollRight}
              className={`absolute right-[-10px] top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full flex items-center justify-center transition
              
              ${
                canScrollRight
                  ? "bg-white shadow-md hover:bg-gray-100"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              <ChevronRight size={20} />
            </button>

          </div>

        </div>

      </section>

      {/* MODAL */}
      {openModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4">

          <div className="w-full max-w-md bg-white rounded-3xl p-6 relative animate-in fade-in zoom-in duration-200">

            {/* CLOSE */}
            <button
              onClick={() =>
                setOpenModal(false)
              }
              className="absolute top-4 right-4 text-gray-400 hover:text-black transition"
            >
              <X size={22} />
            </button>

            <h3 className="text-2xl font-bold mb-6 text-center">
              Додати коментар
            </h3>

            {/* AUTH */}
            {!user ? (
              <div className="flex flex-col items-center">

                <p className="text-sm text-gray-500 mb-5 text-center">
                  Увійдіть через Google,
                  щоб залишити відгук
                </p>

                <button
                  onClick={handleLogin}
                  className="bg-[#FF8A3D] text-white px-6 py-3 rounded-full hover:opacity-90 transition"
                >
                  Увійти через Google
                </button>

              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
              >

                {/* USER */}
                <div className="flex items-center gap-3 mb-5">

                  {user.photoURL ? (
                    <Image
                      src={user.photoURL}
                      alt="avatar"
                      width={46}
                      height={46}
                      className="rounded-full w-[46px] h-[46px]"
                    />
                  ) : (
                    <div className="w-[46px] h-[46px] rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
                      {user.displayName?.charAt(
                        0
                      )}
                    </div>
                  )}

                  <div>
                    <p className="font-semibold text-sm">
                      {user.displayName}
                    </p>

                    <button
                      type="button"
                      onClick={
                        handleLogout
                      }
                      className="text-xs text-red-500 mt-1"
                    >
                      Вийти
                    </button>
                  </div>

                </div>

                {/* TEXTAREA */}
                <textarea
                  value={text}
                  onChange={(e) =>
                    setText(
                      e.target.value.slice(
                        0,
                        300
                      )
                    )
                  }
                  placeholder="Напишіть свій відгук..."
                  rows={5}
                  className="w-full border rounded-2xl px-4 py-3 text-sm resize-none outline-none focus:border-[#FF8A3D]"
                />

                {/* COUNTER */}
                <div className="flex justify-between items-center mt-2">

                  <p className="text-xs text-gray-400">
                    Максимум 300 символів
                  </p>

                  <p
                    className={`text-xs ${
                      text.length > 280
                        ? "text-red-500"
                        : "text-gray-400"
                    }`}
                  >
                    {text.length}/300
                  </p>

                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={
                    loading ||
                    !text.trim()
                  }
                  className="w-full mt-5 bg-[#FF8A3D] text-white py-3 rounded-full hover:opacity-90 transition disabled:opacity-50"
                >
                  {loading
                    ? "Надсилання..."
                    : "Опублікувати"}
                </button>

              </form>
            )}

          </div>

        </div>
      )}
    </>
  );
}