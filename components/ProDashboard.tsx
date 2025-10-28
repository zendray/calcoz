'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Mock data for demonstration
const trendData = [
  { name: 'Jan', avgCost: 210 },
  { name: 'Feb', avgCost: 230 },
  { name: 'Mar', avgCost: 220 },
  { name: 'Apr', avgCost: 250 },
  { name: 'May', avgCost: 240 },
];

export default function ProDashboard() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Average Cost</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">₹235.50</p>
            <p className="text-xs text-muted-foreground">+2.5% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Total Calculations</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">58</p>
            <p className="text-xs text-muted-foreground">+12 this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Most Used Template</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">Summer Tee</p>
            <p className="text-xs text-muted-foreground">Used 15 times</p>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Cost Trend</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="avgCost" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
