import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table";

export default function HomePage() {
  // Mock data for training log
  const trainingLogs = [
    { id: 1, date: "2023-10-01", distance: "5 km", time: "30 min", notes: "Morning run" },
    { id: 2, date: "2023-10-02", distance: "10 km", time: "60 min", notes: "Long run" },
  ];

  // Mock data for leaderboard
  const leaderboard = [
    { id: 1, name: "Alice", distance: "150 km", runs: 15 },
    { id: 2, name: "Bob", distance: "120 km", runs: 12 },
    { id: 3, name: "Charlie", distance: "100 km", runs: 10 },
  ];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Running Enthusiasts Community</h1>

      {/* Training Log Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Training Log</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="mb-4">
            <div className="flex gap-2 mb-4">
              <Input placeholder="Date" />
              <Input placeholder="Distance (km)" />
              <Input placeholder="Time (min)" />
              <Input placeholder="Notes" />
              <Button>Add Log</Button>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Distance</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Notes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {trainingLogs.map((log) => (
                  <TableRow key={log.id}>
                    <TableCell>{log.date}</TableCell>
                    <TableCell>{log.distance}</TableCell>
                    <TableCell>{log.time}</TableCell>
                    <TableCell>{log.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Leaderboard Section */}
      <Card>
        <CardHeader>
          <CardTitle>Leaderboard</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Rank</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Distance</TableHead>
                <TableHead>Runs</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboard.map((entry, index) => (
                <TableRow key={entry.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{entry.name}</TableCell>
                  <TableCell>{entry.distance}</TableCell>
                  <TableCell>{entry.runs}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
