export type Semester = 'spring' | 'fall';

export type UserProfile = {
  id: string;
  school_email: string;
  name: string;
  grade: number;
  sp_affiliation: string;
  bio?: string | null;
  gender?: string | null;
  real_name?: string | null;
  sns_link?: string | null;
  is_private: boolean;
  avatar_config_json: AvatarConfig;
  tutorial_completed: boolean;
  tutorial_step: number;
  semester: Semester;
};

export type AvatarConfig = {
  face: string;
  skin: string;
  hair: string;
  hairColor: string;
  eyes: string;
  eyebrow: string;
  nose: string;
  mouth: string;
  contour: string;
  glasses: string;
  mole: boolean;
  clothesColor: string;
};

export type Encounter = {
  id: string;
  user_a: string;
  user_b: string;
  encountered_on: string;
  distance_meters: number;
  score: number;
};
