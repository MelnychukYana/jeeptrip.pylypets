import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const token =
      process.env.TELEGRAM_TOKEN;

    const adminIds =
      process.env.ADMIN_IDS;

    if (!token || !adminIds) {
      return NextResponse.json(
        {
          ok: false,
          error: "Missing env",
        },
        {
          status: 500,
        }
      );
    }

    const admins = adminIds
      .split(",")
      .map((id) => id.trim());

    // 🔥 ВІДПРАВКА ВСІМ АДМІНАМ
    await Promise.all(
      admins.map((chatId) =>
        fetch(
          `https://api.telegram.org/bot${token}/sendMessage`,
          {
            method: "POST",
            headers: {
              "Content-Type":
                "application/json",
            },
            body: JSON.stringify({
              chat_id: chatId,
              text: body.text,
              parse_mode: "HTML",
            }),
          }
        )
      )
    );

    return NextResponse.json({
      ok: true,
    });
  } catch (e) {
    console.error(e);

    return NextResponse.json(
      { ok: false },
      { status: 500 }
    );
  }
}