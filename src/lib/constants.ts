/**
 * Application constants and configuration
 */

const SUPABASE_BASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://slelguoygbfzlpylpxfs.supabase.co';
const SUPABASE_STORAGE_PATH = process.env.NEXT_PUBLIC_SUPABASE_STORAGE_PATH || '/storage/v1/object/public/test-clones/73b16541-d882-48fd-b4ff-c06ddd608957-quantra-security-webflow-io';

export const SUPABASE_CONFIG = {
  baseUrl: SUPABASE_BASE_URL,
  storagePath: SUPABASE_STORAGE_PATH,
  fullStorageUrl: `${SUPABASE_BASE_URL}${SUPABASE_STORAGE_PATH}`,
};

/**
 * Helper function to build Supabase image URLs
 */
export const getSupabaseImageUrl = (imagePath: string): string => {
  // If the path already includes the full URL, return it as is
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  // Otherwise, construct the full URL
  return `${SUPABASE_CONFIG.fullStorageUrl}${imagePath.startsWith('/') ? imagePath : `/${imagePath}`}`;
};

/**
 * Common image paths
 */
export const IMAGE_PATHS = {
  securityShield: '/assets/images/688ac9263dc9127d7be437ef_security_shield-1.avif',
  alarmClock: '/assets/images/688ac9263dc9127d7be437f0_alarm_clock-2.avif',
  trophyAward: '/assets/images/688ac9263dc9127d7be437f1_trophy_award-3.avif',
  aboutCardPattern: '/assets/images/688ac3149cad4270f7466f90_About_20Card_20Pattern-13.svg',
  videoPoster: '/assets/images/6887471d4a0e0e224c79a9f3_2F68923d867394dd666fd9117-14.jpg',
};

