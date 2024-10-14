'use client'
import { LandingCTA } from '@/designSystem/landing/LandingCTA'
import { LandingContainer } from '@/designSystem/landing/LandingContainer'
import LandingFAQ from '@/designSystem/landing/LandingFAQ'
import { LandingFeatures } from '@/designSystem/landing/LandingFeatures'
import { LandingHero } from '@/designSystem/landing/LandingHero'
import { LandingHowItWorks } from '@/designSystem/landing/LandingHowItWorks'
import { LandingPainPoints } from '@/designSystem/landing/LandingPainPoints'
import { LandingPricing } from '@/designSystem/landing/LandingPricing'
import { LandingSocialProof } from '@/designSystem/landing/LandingSocialProof'
import { LandingSocialRating } from '@/designSystem/landing/LandingSocialRating'
import { LandingTestimonials } from '@/designSystem/landing/LandingTestimonials'
import {
  EditOutlined,
  LinkOutlined,
  TagOutlined,
  FileTextOutlined,
  BulbOutlined,
  RocketOutlined,
} from '@ant-design/icons'

export default function LandingPage() {
  const features = [
    {
      heading: `Effortless Bookmarking`,
      description: `Save any digital content with a single click, from links to PDFs and everything in between.`,
      icon: <LinkOutlined />,
    },
    {
      heading: `AI-Powered Organization`,
      description: `Our smart AI automatically categorizes and tags your saved items, creating a personalized knowledge base.`,
      icon: <TagOutlined />,
    },
    {
      heading: `Comprehensive Content Support`,
      description: `Store diverse content types including memos, code snippets, images, and more in one central location.`,
      icon: <FileTextOutlined />,
    },
    {
      heading: `Intelligent Connections`,
      description: `Discover hidden insights as our AI creates smart links between related items in your collection.`,
      icon: <BulbOutlined />,
    },
    {
      heading: `Personalized Recommendations`,
      description: `Receive tailored content suggestions based on your browsing history and saved items.`,
      icon: <RocketOutlined />,
    },
    {
      heading: `Seamless Integration`,
      description: `Easily incorporate our app into your existing workflow for maximum productivity.`,
      icon: <EditOutlined />,
    },
  ]

  const testimonials = [
    {
      name: `Sarah Johnson`,
      designation: `Freelance Researcher`,
      content: `This app has revolutionized my research process. I can now find and connect information effortlessly, saving me hours of work each week.`,
      avatar: 'https://randomuser.me/api/portraits/women/6.jpg',
    },
    {
      name: `Michael Chen`,
      designation: `Software Developer`,
      content: `As a developer, keeping track of code snippets and resources is crucial. This app has become my second brain, making my coding life so much easier.`,
      avatar: 'https://randomuser.me/api/portraits/men/7.jpg',
    },
    {
      name: `Emily Rodriguez`,
      designation: `Graduate Student`,
      content: `The AI-powered categorization is a game-changer for my thesis research. It's like having a personal assistant organizing all my digital notes.`,
      avatar: 'https://randomuser.me/api/portraits/women/27.jpg',
    },
    {
      name: `David Thompson`,
      designation: `Digital Marketer`,
      content: `The content recommendations have helped me stay on top of industry trends. It's like having a curated newsfeed tailored just for me.`,
      avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
    },
    {
      name: `Lisa Patel`,
      designation: `Journalist`,
      content: `This app has transformed how I gather and connect information for my articles. It's an indispensable tool for any modern journalist.`,
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg',
    },
    {
      name: `Alex Novak`,
      designation: `Entrepreneur`,
      content: `As a busy entrepreneur, this app helps me keep all my ideas and resources organized. It's been instrumental in streamlining my business operations.`,
      avatar: 'https://randomuser.me/api/portraits/men/17.jpg',
    },
  ]

  const navItems = [
    {
      title: `Features`,
      link: `#features`,
    },
    {
      title: `Pricing`,
      link: `#pricing`,
    },
    {
      title: `FAQ`,
      link: `#faq`,
    },
  ]

  const packages = [
    {
      title: `Basic`,
      description: `Perfect for individual users`,
      monthly: 9,
      yearly: 89,
      features: [`Unlimited bookmarks`, `AI categorization`, `Basic search`],
    },
    {
      title: `Pro`,
      description: `Ideal for power users and professionals`,
      monthly: 19,
      yearly: 189,
      features: [
        `Everything in Basic`,
        `Advanced AI insights`,
        `Collaboration tools`,
        `Priority support`,
      ],
      highlight: true,
    },
    {
      title: `Enterprise`,
      description: `Custom solutions for large teams`,
      monthly: 49,
      yearly: 489,
      features: [
        `Everything in Pro`,
        `Custom integrations`,
        `Dedicated account manager`,
        `Advanced analytics`,
      ],
    },
  ]

  const questionAnswers = [
    {
      question: `How does the AI categorization work?`,
      answer: `Our advanced AI analyzes the content of your saved items and automatically assigns relevant tags and categories. It learns from your usage patterns to improve over time, creating a personalized organizational system.`,
    },
    {
      question: `Can I access my bookmarks offline?`,
      answer: `Yes, you can access your saved items offline on our mobile and desktop apps. The app will sync your data when you're back online.`,
    },
    {
      question: `Is my data secure?`,
      answer: `Absolutely. We use industry-standard encryption to protect your data, and we never share your personal information with third parties. Your privacy and security are our top priorities.`,
    },
    {
      question: `Can I import bookmarks from other services?`,
      answer: `Yes, we offer easy import options from popular bookmarking services and browsers. Our support team can assist you with the import process if needed.`,
    },
  ]

  const logos = [
    { url: 'https://i.imgur.com/afwBIFK.png' },
    { url: 'https://i.imgur.com/LlloOPa.png' },
    { url: 'https://i.imgur.com/j8jPb4H.png' },
    { url: 'https://i.imgur.com/mJ1sZFv.png' },
  ]

  const steps = [
    {
      heading: `Save Anything`,
      description: `Quickly save any digital content you come across with our browser extension or mobile app.`,
    },
    {
      heading: `AI Organization`,
      description: `Our intelligent AI automatically categorizes and tags your saved items for easy retrieval.`,
    },
    {
      heading: `Discover Connections`,
      description: `Explore AI-generated links between your saved items to uncover new insights.`,
    },
    {
      heading: `Boost Productivity`,
      description: `Access your organized digital library anytime, anywhere, and supercharge your workflow.`,
    },
  ]

  const painPoints = [
    {
      emoji: `🔍`,
      title: `Endless searching for that "one thing" you know you saved somewhere`,
    },
    {
      emoji: `🤯`,
      title: `Overwhelmed by information overload and scattered digital content`,
    },
    {
      emoji: `⏳`,
      title: `Wasting precious time trying to organize and make sense of your digital life`,
    },
  ]

  const avatarItems = [
    {
      src: 'https://randomuser.me/api/portraits/men/51.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/9.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/women/52.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
    {
      src: 'https://randomuser.me/api/portraits/men/4.jpg',
    },
  ]

  return (
    <LandingContainer navItems={navItems}>
      <LandingHero
        title={`Tame Your Digital Chaos and Unlock Your Knowledge Potential`}
        subtitle={`Harness the power of AI to effortlessly organize, connect, and rediscover your digital world. Save time, reduce stress, and boost your productivity like never before.`}
        buttonText={`Start Organizing for Free`}
        pictureUrl={`https://marblism-dashboard-api--production-public.s3.us-west-1.amazonaws.com/qE54Sx-thingz-Mkco`}
        socialProof={
          <LandingSocialRating
            avatarItems={avatarItems}
            numberOfUsers={10000}
            suffixText={`from happy knowledge seekers`}
          />
        }
      />
      <LandingSocialProof
        logos={logos}
        title={`Trusted by Leading Organizations`}
      />
      <LandingPainPoints
        title={`The Digital Overwhelm: A Modern Dilemma`}
        painPoints={painPoints}
      />
      <LandingHowItWorks
        title={`Your Journey to Digital Clarity`}
        steps={steps}
      />
      <LandingFeatures
        id="features"
        title={`Empower Your Digital Life with Intelligent Organization`}
        subtitle={`Discover how our AI-powered features can transform your information management and boost your productivity.`}
        features={features}
      />
      <LandingTestimonials
        title={`Success Stories: How Our Users Achieved Digital Zen`}
        subtitle={`Join thousands of satisfied users who have revolutionized their digital lives with our app.`}
        testimonials={testimonials}
      />
      <LandingPricing
        id="pricing"
        title={`Invest in Your Productivity and Peace of Mind`}
        subtitle={`Choose the plan that best fits your needs and start organizing your digital world today.`}
        packages={packages}
      />
      <LandingFAQ
        id="faq"
        title={`Got Questions? We've Got Answers`}
        subtitle={`Find quick answers to common questions about our app and how it can transform your digital life.`}
        questionAnswers={questionAnswers}
      />
      <LandingCTA
        title={`Ready to Master Your Digital Universe?`}
        subtitle={`Join thousands of users who have already transformed their digital lives. Start your journey to effortless organization and enhanced productivity today.`}
        buttonText={`Get Started for Free`}
        buttonLink={`/register`}
      />
    </LandingContainer>
  )
}
