import mongoose, { Schema } from 'mongoose'
import { isEmail } from 'validator'

const roles = ['user', 'admin']

// MongoDB Model
const objectSchema = new Schema({
    email: {
        type: String,
        validate: isEmail,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    name: {
        type: String,
        index: true,
        trim: true
    },
    role: {
        type: String,
        enum: roles,
        default: 'user'
    },
    picture: {
        type: String,
        trim: true
    }
}, {
    timestamps: true
})

objectSchema.methods = {
    view (full) {
        const view = {
            id: this._id,
            name: this.name,
            role: this.role,
            picture: this.picture,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }

        return full ? {
            ...view,
            email: this.email,
        } : view
    }
}

export default mongoose.model('User', objectSchema)
