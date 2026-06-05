"use client";

import { useState } from "react";
import Image from "next/image";

import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { motion } from "framer-motion";

export default function GiftCertificateSection() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  // 👉 зберігаємо тільки 9 цифр
  const [form, setForm] = useState({
    customerName: "",
    recipientName: "",
    phone: "",
    messenger: "Telegram",
    comment: "",
  });

  // 🔥 PHONE HANDLER (СТАБІЛЬНИЙ)
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    // прибираємо все крім цифр
    value = value.replace(/\D/g, "");

    // тільки 9 цифр
    value = value.slice(0, 9);

    setForm((prev) => ({
      ...prev,
      phone: value,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError("");

    if (!form.customerName || !form.phone) {
      setError("Заповніть обовʼязкові поля");
      return;
    }

    if (form.phone.length !== 9) {
      setError("Введіть повний номер +380XXXXXXXXX");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "giftCertificates"), {
        customerName: form.customerName,
        recipientName: form.recipientName,
        phone: `+380${form.phone}`, // 🔥 фінальний формат
        messenger: form.messenger,
        comment: form.comment,
        createdAt: serverTimestamp(),
      });

await addDoc(collection(db, "giftCertificates"), {
  customerName: form.customerName,
  recipientName: form.recipientName,
  phone: `+380${form.phone}`,
  messenger: form.messenger,
  comment: form.comment,
  createdAt: serverTimestamp(),
});

    // 👇 TELEGRAM NOTIFICATION
    await fetch("/api/telegram", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: `
    🎁 <b>Нова заявка на сертифікат</b>

    👤 Замовник: ${form.customerName}
    🎯 Отримувач: ${form.recipientName}
    📱 Телефон: +380${form.phone}
    💬 Месенджер: ${form.messenger}
    📝 Коментар: ${form.comment || "-"}
        `,
      }),
    });

      setForm({
        customerName: "",
        recipientName: "",
        phone: "",
        messenger: "Telegram",
        comment: "",
      });

      setSuccess(true);
      setTimeout(() => setSuccess(false), 2500);
    } catch (err) {
      console.error(err);
      setError("Помилка відправки заявки");
    }

    setLoading(false);
  };

  return (
    <>
      <motion.section
        id="certificate"
        className="w-full py-10 bg-[#fdf3e4]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="w-[98%] mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 items-start">

            {/* IMAGE */}
            <div className="relative w-full h-[220px] md:h-[320px] lg:h-full rounded-3xl overflow-hidden shadow-lg">
              <Image
                src="/gift.png"
                alt="Подарунковий сертифікат"
                fill
                className="object-cover"
              />
            </div>

            {/* TEXT */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.9, delay: 0.1 }}
              className="flex flex-col justify-start text-center md:text-left items-center md:items-start"
            >

              <p className="uppercase tracking-[4px] text-xs text-[#FF8A3D] mb-3">
                JeepTrip Pylypets
              </p>

              <h2 className="text-3xl md:text-5xl leading-tight font-bold text-black uppercase">
                Подарункові
                <br />
                Сертифікати
              </h2>

              <p className="mt-4 text-lg md:text-xl text-black leading-snug">
                Подаруйте політ
                <br />
                та незабутні емоції
              </p>

              <p className="mt-4 text-sm md:text-base text-gray-700 leading-relaxed max-w-md mx-auto md:mx-0">
                Подарунковий сертифікат від{" "}
                <span className="font-semibold">JeepTrip Pylypets</span> —
                це можливість здійснити політ на параплані над Карпатами
                та отримати емоції, які запам’ятаються на все життя.
              </p>

              {/* FEATURES */}
              <div className="mt-4 space-y-2 text-sm text-black w-full">

                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-[#FF8A3D]">●</span>
                  <span>Політ на параплані над Карпатами</span>
                </div>

                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-[#FF8A3D]">●</span>
                  <span>Електронний або друкований формат</span>
                </div>

                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-[#FF8A3D]">●</span>
                  <span>Швидке оформлення через Telegram</span>
                </div>

                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <span className="text-[#FF8A3D]">●</span>
                  <span>Ідеальний подарунок для особливих моментів</span>
                </div>

              </div>

            </motion.div>

            {/* FORM */}
            <div className="flex flex-col justify-start">

              <motion.form
                onSubmit={handleSubmit}
                className="grid grid-cols-2 gap-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                variants={{
                  hidden: {},
                  show: {
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.35,
                    },
                  },
                }}
              >

                {/* NAME */}
                <motion.div
                  className="col-span-2"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <input
                    name="customerName"
                    value={form.customerName}
                    onChange={handleChange}
                    type="text"
                    className="w-full border rounded-xl px-4 py-3 text-sm bg-white"
                    placeholder="Ваше ім’я"
                  />
                </motion.div>

                {/* RECIPIENT */}
                                <motion.div
                  className="col-span-2"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <input
                    name="recipientName"
                    value={form.recipientName}
                    onChange={handleChange}
                    type="text"
                    className="w-full border rounded-xl px-4 py-3 text-sm bg-white"
                    placeholder="ПІБ отримувача"
                  />
                </motion.div>

                {/* PHONE (FIXED +380 UX) */}
                <motion.div
                  className="col-span-1"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -12,
                      filter: "blur(6px)",
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <div className="w-full border rounded-xl px-4 py-3 text-sm bg-white flex items-center">
                    <span className="text-gray-500">+380</span>

                    <input
                      value={form.phone}
                      onChange={handlePhoneChange}
                      className="flex-1 outline-none ml-1"
                      placeholder="XXXXXXXXX"
                      type="tel"
                    />
                  </div>
                </motion.div>

                {/* MESSENGER */}
                <motion.div
                  className="col-span-1"
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -12,
                      filter: "blur(6px)",
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <select
                    name="messenger"
                    value={form.messenger}
                    onChange={handleChange}
                    className="w-full border rounded-xl px-4 py-3 text-sm bg-white appearance-none"
                  >
                    <option>Telegram</option>
                    <option>Instagram</option>
                    <option>WhatsApp</option>
                  </select>
                </motion.div>

                {/* COMMENT */}
                 <motion.div
                  className="col-span-2"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  <textarea
                    name="comment"
                    value={form.comment}
                    onChange={handleChange}
                    rows={3}
                    className="w-full border rounded-xl px-4 py-3 text-sm bg-white resize-none"
                    placeholder="Коментар..."
                  />
                </motion.div>

                {/* BUTTON */}
                <motion.button
                  type="submit"
                  disabled={loading}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: -12,
                      filter: "blur(6px)",
                    },
                    show: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                    },
                  }}
                  transition={{
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="col-span-2 bg-[#FF8A3D] text-white py-3 rounded-2xl uppercase"
                >
                  {loading ? "Відправка..." : "Замовити сертифікат"}
                </motion.button>

                {/* ERROR */}
                {error && (
                  <p className="col-span-2 text-red-500 text-xs text-center">
                    {error}
                  </p>
                )}

              </motion.form>

            </div>

          </div>
        </div>
      </motion.section>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white px-8 py-6 rounded-2xl text-center">
            <div className="text-3xl">✅</div>
            <p className="font-semibold mt-2">
              Заявку відправлено
            </p>
            <p className="text-sm text-gray-500">
              Ми зв’яжемось з вами
            </p>
          </div>
        </div>
      )}
    </>
  );
}