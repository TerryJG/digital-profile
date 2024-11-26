import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    dataFancybox: { type: String, required: true },
    contentType: { type: String, required: true },
    itemType: { type: String },
    category: { type: String, required: true },
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
    icons: [{ type: String }],
    'data-date': { type: String, required: true },
    isFeatured: { type: Boolean, required: true },
    isArchived: { type: Boolean, required: true },
    title: { type: String, required: true },
    subTitle: { type: String },
    imgSrc: { type: String, required: true },
    imgSrcAlt: { type: String, required: true },
    fallbackImgSrc: { type: String },
}, {
    timestamps: true,
    collection: 'images'
});

export const Image = mongoose.model('Image', imageSchema);