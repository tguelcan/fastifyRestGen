import mongoose, { Schema } from 'mongoose'

// MongoDB Model
const objectSchema = new Schema({
    content: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

objectSchema.methods = {
    view (full) {
        const view = {
            // simple view
            content: this.content,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt
        }

        return full ? {
            ...view
            // add properties for a full view
        } : view
    }
}

export default mongoose.model('Message', objectSchema)
