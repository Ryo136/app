create extension if not exists "pgcrypto";

create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  school_email text unique not null,
  name text,
  grade int,
  sp_affiliation text,
  bio text,
  gender text,
  real_name text,
  sns_link text,
  is_private boolean not null default false,
  avatar_config_json jsonb,
  tutorial_completed boolean not null default false,
  tutorial_step int not null default 1,
  semester text not null default 'spring',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.user_tags (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.users(id) on delete cascade,
  tag_name text not null,
  is_custom boolean not null default false
);

create table if not exists public.encounters (
  id uuid primary key default gen_random_uuid(),
  user_a uuid not null references public.users(id) on delete cascade,
  user_b uuid not null references public.users(id) on delete cascade,
  encountered_on date not null,
  first_detected_at timestamptz not null,
  last_detected_at timestamptz not null,
  distance_meters numeric(6,2) not null,
  accuracy_a numeric(6,2) not null,
  accuracy_b numeric(6,2) not null,
  score int not null default 1,
  semester text not null
);

create table if not exists public.encounter_daily_rollups (
  id uuid primary key default gen_random_uuid(),
  user_a uuid not null references public.users(id) on delete cascade,
  user_b uuid not null references public.users(id) on delete cascade,
  date date not null,
  counted_once boolean not null default true,
  published_at timestamptz
);

create unique index if not exists encounter_once_idx
on public.encounter_daily_rollups (least(user_a, user_b), greatest(user_a, user_b), date);

create table if not exists public.reactions (
  id uuid primary key default gen_random_uuid(),
  from_user uuid not null references public.users(id) on delete cascade,
  to_user uuid not null references public.users(id) on delete cascade,
  emoji text not null,
  sent_at timestamptz not null default now(),
  date date not null default current_date
);

create table if not exists public.levels (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references public.users(id) on delete cascade,
  target_user_id uuid not null references public.users(id) on delete cascade,
  encounter_points int not null default 0,
  reaction_points int not null default 0,
  event_points int not null default 0,
  total_points int generated always as (encounter_points + reaction_points + event_points) stored,
  level int not null default 1,
  semester text not null
);

create table if not exists public.puzzle_pieces (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references public.users(id) on delete cascade,
  target_user_id uuid not null references public.users(id) on delete cascade,
  semester text not null,
  unlocked_at timestamptz not null default now()
);

create table if not exists public.apartment_residents (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references public.users(id) on delete cascade,
  resident_user_id uuid not null references public.users(id) on delete cascade,
  semester text not null,
  move_in_at timestamptz not null default now(),
  mii_config_json jsonb
);

create table if not exists public.resident_relationships (
  id uuid primary key default gen_random_uuid(),
  owner_user_id uuid not null references public.users(id) on delete cascade,
  resident_a uuid not null references public.users(id) on delete cascade,
  resident_b uuid not null references public.users(id) on delete cascade,
  relation_type text not null default 'friend',
  intimacy int not null default 0,
  updated_at timestamptz not null default now()
);

create table if not exists public.events (
  id uuid primary key default gen_random_uuid(),
  title text not null,
  description text,
  start_at timestamptz,
  end_at timestamptz,
  status text not null default 'draft'
);

create table if not exists public.event_participants (
  id uuid primary key default gen_random_uuid(),
  event_id uuid not null references public.events(id) on delete cascade,
  user_id uuid not null references public.users(id) on delete cascade,
  response_status text not null default 'pending'
);
