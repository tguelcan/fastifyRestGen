import bcrypt from 'bcryptjs'

export const passwordValidator = {
    /**
     * Password validator - The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)
     * @param {string} password - The password
     * @returns {boolean} if the password is strong enough
     */
    validator: function (password) {
        const strongRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*?])(?=.{8,})')
        return strongRegex.test(password)
    },
    /**
     * Send message if error
     * @returns {string} message - The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)
     */
    message: () => 'The password must contain at least: 1 uppercase letter, 1 lowercase letter, 1 number, and one special character (E.g. , . _ & ? etc)'
}

/**
 * Hash the Password with bcrypt
 * @param {string} password
 * @returns {Promise} The hashed password.
 */
export const hashPassword = async (password) => 
    await bcrypt.hash(password, 9)
