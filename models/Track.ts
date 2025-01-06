 TrackSchema = new Schema({
        required: true,
        validate: {
            validator: async (value: Types.ObjectId) => {
                return Album.findById(value);
                const album = await Album.findById(value);
                return Boolean(album);
            },
            message: 'Album does not exist!',
        }