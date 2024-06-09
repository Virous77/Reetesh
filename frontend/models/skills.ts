import mongoose from 'mongoose';

interface ISkill {
  name: string;
  level: string;
  icon: string;
  skillType: string;
}

interface MongoSkill extends ISkill, mongoose.Document {}

export type TSkill = ISkill & {
  _id: string;
  createdAt: string;
  updatedAt: string;
};

const SkillSchema = new mongoose.Schema<MongoSkill>(
  {
    name: {
      type: String,
      required: true,
    },
    level: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
    },
    skillType: {
      type: String,
      default: 'frontend',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.Skill ||
  mongoose.model<MongoSkill>('Skill', SkillSchema);
