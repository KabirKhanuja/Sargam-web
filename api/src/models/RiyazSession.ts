import mongoose, { Schema, Document } from "mongoose";

export interface RiyazSessionDocument extends Document {
  userId?: string;            
  scale: string;             
  startTime: Date;
  endTime: Date;
  totalDurationSec: number;   
  effectiveDurationSec: number; 
  createdAt: Date;
}

const RiyazSessionSchema = new Schema<RiyazSessionDocument>(
  {
    userId: { type: String, required: false },

    scale: {
      type: String,
      required: true
    },

    startTime: {
      type: Date,
      required: true
    },

    endTime: {
      type: Date,
      required: true
    },

    totalDurationSec: {
      type: Number,
      required: true
    },

    effectiveDurationSec: {
      type: Number,
      required: true
    }
  },
  {
    timestamps: { createdAt: true, updatedAt: false }
  }
);

export const RiyazSession = mongoose.model<RiyazSessionDocument>(
  "RiyazSession",
  RiyazSessionSchema
);