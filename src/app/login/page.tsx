import { signIn } from "@/auth"
import { Gamepad2 } from "lucide-react"
 
export default function LoginPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center">
      <div className="panel-wood flex flex-col items-center gap-6 text-center" style={{ maxWidth: '400px' }}>
        
        {/* Logo / Header */}
        <div className="flex flex-col items-center gap-2">
            <div style={{ 
                background: '#ffd700', 
                padding: '1rem', 
                borderRadius: '50%', 
                border: '4px solid #fff',
                boxShadow: '0 4px 0 rgba(0,0,0,0.2)'
            }}>
                <Gamepad2 size={48} color="#3e2723" />
            </div>
            <h1 style={{ fontSize: '2rem', textShadow: '2px 2px 0 #3e2723' }}>LEVEL UP</h1>
            <p style={{ color: '#fff8e1' }}>Press Start to Continue</p>
        </div>

        {/* Divider */}
        <div style={{ width: '100%', height: '4px', background: '#5d4037', borderBottom: '2px solid rgba(255,255,255,0.2)' }}></div>

        {/* Login Buttons */}
        <form
          action={async () => {
            "use server"
            await signIn("google", { redirectTo: "/" })
          }}
        >
          <button className="pixel-btn" style={{ fontSize: '1.25rem', display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <span>GOOGLE ACCOUNT</span>
          </button>
        </form>

        <p style={{ fontSize: '0.75rem', color: '#fff8e1', opacity: 0.8 }}>
            By continuing, you agree to join the adventure and accept our Terms of Questing.
        </p>

      </div>
    </div>
  )
}
