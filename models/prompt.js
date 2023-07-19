import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'la oferta es obligatoria.'],
  },
  tag: {
    type: String,
    required: [true, 'El tag es obligatorio.'],
  }
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;