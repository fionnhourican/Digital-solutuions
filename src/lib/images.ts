export interface ImageConfig {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  sizes?: string;
}

export const imageConfigs = {
  hero: {
    src: '/images/hero-bg.jpg',
    alt: 'Modern government office with digital technology',
    priority: true,
    sizes: '100vw'
  },
  teamWorking: {
    src: '/images/team-working.jpg',
    alt: 'Professional team collaborating on government IT solutions',
    sizes: '(max-width: 768px) 100vw, 50vw'
  },
  projects: {
    admin: {
      src: '/images/project-admin.jpg',
      alt: 'Government administration system interface',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    },
    cloud: {
      src: '/images/project-cloud.jpg',
      alt: 'Cloud infrastructure for government services',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    },
    documents: {
      src: '/images/project-documents.jpg',
      alt: 'Digital document management system',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    },
    messaging: {
      src: '/images/project-messaging.jpg',
      alt: 'Government communication platform',
      sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
    }
  }
};

export const getOptimizedImageUrl = (src: string, width?: number, quality = 85) => {
  // In a production environment, you might use a service like Cloudinary or similar
  // For now, we'll return the original URL
  return src;
};

export const preloadImage = (src: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
};

export const preloadCriticalImages = async () => {
  const criticalImages = [
    imageConfigs.hero.src,
    imageConfigs.teamWorking.src
  ];

  try {
    await Promise.all(criticalImages.map(preloadImage));
  } catch (error) {
    console.warn('Failed to preload some critical images:', error);
  }
};
