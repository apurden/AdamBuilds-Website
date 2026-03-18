import { GlossaryTerm } from '../types';

export const glossaryData: GlossaryTerm[] = [
  { term: 'Artificial General Intelligence (AGI)', definition: 'A hypothetical type of AI that can understand, learn, and apply intelligence across a wide range of tasks at or above human level.', category: 'Concepts' },
  { term: 'Context Window', definition: 'The limit on the amount of text (tokens) a model can consider at one time (input + output).', category: 'Architecture' },
  { term: 'Deep Learning', definition: 'A subset of machine learning based on artificial neural networks with multiple layers, capable of learning complex patterns from large amounts of data.', category: 'Concepts' },
  { term: 'Fine-tuning', definition: 'The process of taking a pre-trained model and training it further on a specific dataset to specialize it for a certain task.', category: 'Training' },
  { term: 'Generative AI', definition: 'A broad category of AI systems designed to generate new content, such as text, images, audio, or code, based on patterns learned from existing data.', category: 'Concepts' },
  { term: 'Hallucination', definition: 'When an AI model confidently generates false or nonsensical information.', category: 'Issues' },
  { term: 'Large Language Model (LLM)', definition: 'A type of AI model trained on massive amounts of text data, capable of understanding and generating human-like language.', category: 'Architecture' },
  { term: 'Machine Learning', definition: 'A branch of AI focused on building systems that learn from data and improve their performance over time without being explicitly programmed.', category: 'Concepts' },
  { term: 'Multimodal', definition: 'The ability of a model to process and generate multiple types of media (text, images, audio) simultaneously.', category: 'Capabilities' },
  { term: 'Natural Language Processing (NLP)', definition: 'A field of AI focused on the interaction between computers and human language, enabling machines to read, understand, and derive meaning from text.', category: 'Concepts' },
  { term: 'Neural Network', definition: 'A computing system inspired by the human brain, consisting of interconnected nodes (neurons) that process information and learn patterns.', category: 'Architecture' },
  { term: 'Prompt Engineering', definition: 'The practice of designing and refining the input text (prompts) given to an AI model to elicit the most accurate, relevant, or creative response.', category: 'Techniques' },
  { term: 'RAG', definition: 'Retrieval-Augmented Generation. A technique where an LLM is provided with external data (context) to generate more accurate answers.', category: 'Architecture' },
  { term: 'Temperature', definition: 'A parameter that controls the randomness of the model\'s output. Higher values (0.8+) make output more creative/random, lower values (0.2) make it more focused/deterministic.', category: 'Parameters' },
  { term: 'Token', definition: 'The basic unit of text processing for an LLM. Roughly 0.75 words. "Hamburger" might be 2-3 tokens.', category: 'Basics' },
  { term: 'Zero-shot Learning', definition: 'The ability of a model to perform a task without having seen any examples of that specific task during training.', category: 'Training' },
];
