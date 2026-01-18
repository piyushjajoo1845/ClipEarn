import { ChartArea, Globe, Users, Wallet } from "lucide-react";
import payout from "../assets/payouts.jpg"
import Analytics from "../assets/Analytics.jpg"
import creators from "../assets/creators.jpg"


 export const features = [
    {
        title: "Quick Payouts",
        description: "Get paid within48 hours of approval. ",
        icon: <Wallet className="w-6 h-6"/>,
        image: payout,
        isActive: true,
    },
    {
        title: "Analytics Dashboard",
        description: "Track your earnings in real-time ",
        icon: <ChartArea className="w-6 h-6"/>,
        image: Analytics,
        isActive: false,
    },
    {
        title: "Creator Community",
        description: "Connect with other creators ",
        icon: <Users className="w-6 h-6"/>,
        image: creators,
        isActive: false,
    },
    {
        title: "Instant Brand Matching",
        description: "AI-powered algorithm connects you with brands that fit your style",
        icon: <Globe className="w-6 h-6"/>,
        image: payout,
        isActive: false,
    } 
]
