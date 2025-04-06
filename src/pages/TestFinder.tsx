
import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Textarea } from '@/components/ui/textarea';
import { testSolutions } from '@/data/testSolutions';

const TestFinder = () => {
  const [query, setQuery] = useState('');
  const [url, setUrl] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof testSolutions | null>(null);
  const [searchType, setSearchType] = useState<'text' | 'url'>('text');

  const handleSearch = () => {
    setIsSearching(true);
    
    // Simulating search process
    setTimeout(() => {
      let filteredResults;
      
      if (searchType === 'text') {
        // Filter test solutions based on query text match
        const searchTerms = query.toLowerCase().split(' ');
        filteredResults = testSolutions.filter(test => 
          searchTerms.some(term => 
            test.name.toLowerCase().includes(term) || 
            test.description.toLowerCase().includes(term) ||
            test.skills.some(skill => skill.toLowerCase().includes(term))
          )
        );
      } else {
        // For URL-based search, we'd typically fetch and analyze the job description
        // Here we're just simulating that by checking if URL contains certain keywords
        const urlLower = url.toLowerCase();
        filteredResults = testSolutions.filter(test => 
          test.keywords.some(keyword => urlLower.includes(keyword.toLowerCase()))
        );
      }
      
      // Limit to max 10 results, sorted by relevance (simulated by matching test type)
      filteredResults = filteredResults.slice(0, 10);
      
      setSearchResults(filteredResults);
      setIsSearching(false);
    }, 1000);
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <header className="py-6 border-b">
        <div className="container flex items-center justify-center">
          <div className="flex items-center gap-2">
            <Search className="h-8 w-8 text-genai-primary" />
            <h1 className="text-2xl font-bold text-gray-800">Test Solution Finder</h1>
          </div>
        </div>
      </header>
      
      <main className="container py-8">
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Find the Right Assessment for Your Needs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex gap-4 mb-4">
              <Button 
                variant={searchType === 'text' ? 'default' : 'outline'} 
                onClick={() => setSearchType('text')}
                className="flex-1"
              >
                Search by Text
              </Button>
              <Button 
                variant={searchType === 'url' ? 'default' : 'outline'} 
                onClick={() => setSearchType('url')}
                className="flex-1"
              >
                Search by Job URL
              </Button>
            </div>
            
            {searchType === 'text' ? (
              <div className="space-y-4">
                <Textarea 
                  placeholder="Enter job description or query text..." 
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="min-h-[120px]"
                />
              </div>
            ) : (
              <div className="space-y-4">
                <Input 
                  placeholder="Enter job description URL..." 
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            )}
            
            <Button 
              className="mt-4 w-full" 
              onClick={handleSearch}
              disabled={isSearching || (searchType === 'text' ? !query.trim() : !url.trim())}
            >
              {isSearching ? 'Searching...' : 'Find Tests'}
            </Button>
          </CardContent>
        </Card>
        
        {searchResults && (
          <Card>
            <CardHeader>
              <CardTitle>Recommended Test Solutions</CardTitle>
            </CardHeader>
            <CardContent>
              {searchResults.length > 0 ? (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Assessment Name</TableHead>
                        <TableHead>Test Type</TableHead>
                        <TableHead>Duration</TableHead>
                        <TableHead>Remote Testing</TableHead>
                        <TableHead>Adaptive/IRT</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {searchResults.map((test) => (
                        <TableRow key={test.id}>
                          <TableCell className="font-medium">
                            <a 
                              href={test.url} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="text-blue-600 hover:underline"
                            >
                              {test.name}
                            </a>
                          </TableCell>
                          <TableCell>{test.type}</TableCell>
                          <TableCell>{test.duration}</TableCell>
                          <TableCell>{test.remoteTestingSupport ? 'Yes' : 'No'}</TableCell>
                          <TableCell>{test.adaptiveSupport ? 'Yes' : 'No'}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  No matching test solutions found. Try adjusting your search query.
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </main>
      
      <footer className="py-6 border-t mt-12 bg-white">
        <div className="container text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Test Solution Finder</p>
        </div>
      </footer>
    </div>
  );
};

export default TestFinder;
