const User = require("../models/User");
const bcrypt = require("bcrypt");

const createAdmin = async () => {
    try {
        // Guard: skip silently if required env vars are missing
        const { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_NAME } = process.env;

        if (!ADMIN_EMAIL || !ADMIN_PASSWORD || !ADMIN_NAME) {
            console.log("Admin env vars not set — skipping admin creation.");
            return;
        }

        const admin = await User.findOne({ email: ADMIN_EMAIL });

        if (admin) {
            console.log("Admin Already Exists");
            return;
        }

        const hashedPassword = await bcrypt.hash(ADMIN_PASSWORD, 10);

        await User.create({
            name: ADMIN_NAME,
            email: ADMIN_EMAIL,
            password: hashedPassword
        });

        console.log("Default Admin Created");

    } catch (error) {
        console.error("createAdmin error:", error.message);
    }
};

console.log("Checking Admin...");
module.exports = createAdmin;