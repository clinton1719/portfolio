import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Clinton Fernandes - Software Engineer',
	description:
		'Here\'s a revised welcome statement for your portfolio, tailored to your profile:Welcome to my portfolio! I\'m a results-driven Senior Software Engineer with over four years of experience. I specialize in building scalable, cloud-native applications using Java, Spring Boot, and AWS Serverless. I build clean, optimised software that make an impact.',
	keywords: [
		'Web Developer',
		'Software Engineer',
		'Frontend Developer',
		'React Developer',
		'Next.js',
		'JavaScript',
		'TypeScript',
		'HTML5',
		'CSS3',
		'Java',
		'Spring Boot',
		'SQL',
		'AWS',
		'Senior Software Developer',
		'Senior Software Engineer',
		'Responsive Design',
		'UI/UX',
		'Web Accessibility',
		'Performance Optimization',
		'Modern Web Development',
		'Progressive Web Apps',
		'Clinton Fernandes',
	],
	authors: [{ name: 'Clinton Fernandes' }],
	creator: 'Clinton Fernandes',
	openGraph: {
		title: 'Clinton Fernandes - Web Developer Portfolio',
		description: 'Here\'s a revised welcome statement for your portfolio, tailored to your profile:Welcome to my portfolio! I\'m a results-driven Senior Software Engineer with over four years of experience. I specialize in building scalable, cloud-native applications using Java, Spring Boot, and AWS Serverless. I build clean, optimised software that make an impact.',
		url: 'https://your-domain.com',
		siteName: 'Clinton Fernandes - Portfolio',
		images: [
			{
				url: '/og-image.jpg',
				width: 1200,
				height: 630,
				alt: '[Your Name] - Web Developer Portfolio',
			},
		],
		locale: 'en_US',
		type: 'website',
	},
	twitter: {
		card: 'summary_large_image',
		title: '[Your Name] - Web Developer',
		description: 'Passionate web developer crafting modern and engaging digital experiences. Explore my projects and web development expertise.',
		creator: '@yourusername',
		images: ['/og-image.jpg'],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
		</html>
	);
}
