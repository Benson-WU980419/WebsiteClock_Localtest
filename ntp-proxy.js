export default {
  async fetch(request) {
    const url = "https://worldtimeapi.org/api/timezone/Asia/Taipei";
    const res = await fetch(url);
    if (!res.ok) {
      return new Response("Failed to fetch time", { status: 500 });
    }
    const data = await res.json();
    const currentTime = new Date(data.datetime).getTime();
    return new Response(JSON.stringify({
      unixtime: currentTime
    }), {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store"
      }
    });
  }
};
