import cookie from "cookie";

export default function handler(req, res) {
    if (req.method === "POST") {
        const { benutzer, passwort } = req.body;
        if (benutzer === process.env.ADMIN_BENUTZER && passwort === process.env.ADMIN_PASSWORT) {
            res.setHeader("Set-Cookie", cookie.serialize("TOKEN", process.env.TOKEN, {
                maxAge: 60 * 60,
                sameSite: "strict",
                path: "/",
                httpOnly: true
            }));
            
            res.status(200).json("Erfolgreich")
        } else {
            res.status(400).json("Login fehlgeschlagen")
        }
    }
}