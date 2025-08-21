import { useAuth } from '../../hooks/useAuth'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Navbar } from '../layout/Navbar'

export function Dashboard() {
  const { user } = useAuth()

  const formatDate = (dateString: string | null | undefined) => {
    if (!dateString) return 'N/A'
    try {
      return new Date(dateString).toLocaleString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    } catch {
      return 'Invalid Date'
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Welcome back, {user?.name}!</h1>
          <p className="mt-2 text-muted-foreground">Here's your complete profile information</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Personal Information Card */}
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
              <CardDescription>Your basic account details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
                <p className="text-lg font-medium">{user?.name || 'N/A'}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <p className="text-lg font-medium">{user?.email || 'N/A'}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                <p className="text-lg font-medium">{user?.phone || 'N/A'}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Role</h3>
                <p className="text-lg font-medium capitalize">{user?.role || 'N/A'}</p>
              </div>
            </CardContent>
          </Card>

          {/* Account Information Card */}
          <Card>
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Account status and timestamps</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Account Status</h3>
                <div className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${user?.isActive ? 'bg-green-500' : 'bg-red-500'}`}></div>
                  <p className="text-lg font-medium">{user?.isActive ? 'Active' : 'Inactive'}</p>
                </div>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Last Login</h3>
                <p className="text-sm font-medium">{formatDate(user?.lastLoginAt)}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Account Created</h3>
                <p className="text-sm font-medium">{formatDate(user?.createdAt)}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Last Updated</h3>
                <p className="text-sm font-medium">{formatDate(user?.updatedAt)}</p>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-sm font-medium text-muted-foreground">Customer Info</h3>
                <p className="text-sm font-medium">{user?.customer ? 'Available' : 'Not available'}</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}