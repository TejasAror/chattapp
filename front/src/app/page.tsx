import FeatureSection from "@/components/base/FeatureSection";
import Footer from "@/components/base/Footer";
import HeroSection from "@/components/base/HeroSection";
import Navbar from "@/components/base/Navbar";
import UserReviews from "@/components/base/UseReviews";
import { getServerSession } from "next-auth";
import { authOption, CustomSession } from "./api/auth/[...nextauth]/options";
import { fetchChatGroups } from "@/fetch/groupFetch";


export default async function Home() {
  const session:CustomSession | null = await getServerSession(authOption);
 
  return <div className="min-h-screen flex flex-col ">
  {/* Header */}
  <Navbar user={session?.user}/>
  {/* Hero Section */}
  <HeroSection />

  {/* Features Section */}
  <FeatureSection />

  {/* User Reviews Section */}
  <UserReviews />

  {/* Footer */}
  <Footer />
</div>
}
