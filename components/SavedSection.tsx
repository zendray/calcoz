'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

interface SavedSectionProps {
  plan: 'basic' | 'pro' | null;
  currentValues: any;
  onLoadTemplate: (values: any) => void;
}

interface Template {
  name: string;
  data: any;
}

export default function SavedSection({ plan, currentValues, onLoadTemplate }: SavedSectionProps) {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [templateName, setTemplateName] = useState('');

  useEffect(() => {
    if (plan === 'pro') {
      const savedTemplates = JSON.parse(localStorage.getItem('calcoz_templates') || '[]');
      setTemplates(savedTemplates);
    }
  }, [plan]);

  const handleCreateTemplate = () => {
    if (!templateName.trim() || plan !== 'pro') return;

    const newTemplate: Template = {
      name: templateName,
      data: currentValues,
    };

    const updatedTemplates = [...templates, newTemplate];
    setTemplates(updatedTemplates);
    localStorage.setItem('calcoz_templates', JSON.stringify(updatedTemplates));
    setTemplateName('');
  };

  if (plan !== 'pro') {
    return (
      <Card>
        <CardContent className="pt-6 text-center">
          <p className="font-semibold">This is a Pro feature.</p>
          <p className="text-muted-foreground">Upgrade to Pro to save and use templates.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Create New Template</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4">
          <Input
            value={templateName}
            onChange={(e) => setTemplateName(e.target.value)}
            placeholder="e.g., Summer T-Shirt"
          />
          <Button onClick={handleCreateTemplate}>+ Create Template</Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Your Templates</CardTitle>
        </CardHeader>
        <CardContent>
          {templates.length === 0 ? (
            <p className="text-muted-foreground">No templates created yet.</p>
          ) : (
            <div className="space-y-2">
              {templates.map((template) => (
                <div key={template.name} className="flex justify-between items-center p-3 border rounded-lg">
                  <p className="font-semibold">{template.name}</p>
                  <Button variant="outline" size="sm" onClick={() => onLoadTemplate(template.data)}>
                    Load
                  </Button>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
