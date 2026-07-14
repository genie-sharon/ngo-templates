'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Upload, Users, Building2 } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/components/ui/atoms/button';
import { Input } from '@/components/ui/forms/input';
import { Select } from '@/components/ui/forms/select';
import { Textarea } from '@/components/ui/forms/textarea';

const CATEGORIES = [
  { value: 'universal', label: 'Universal NGO' },
  { value: 'healthcare', label: 'Healthcare' },
  { value: 'education', label: 'Education' },
  { value: 'environment', label: 'Environment' },
  { value: 'faith', label: 'Faith Based' },
  { value: 'humanitarian', label: 'Humanitarian' },
  { value: 'disaster', label: 'Disaster Relief' },
  { value: 'animals', label: 'Animal Welfare' },
  { value: 'community', label: 'Community' },
  { value: 'arts', label: 'Arts & Culture' },
];

const COUNTRIES = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'in', label: 'India' },
  { value: 'other', label: 'Other' },
];

export default function BuilderPage() {
  const [orgName, setOrgName] = useState('');
  const [mission, setMission] = useState('');
  const [category, setCategory] = useState('');
  const [country, setCountry] = useState('');
  const [audience, setAudience] = useState('');
  const [primaryColor, setPrimaryColor] = useState('#2563eb');
  const [secondaryColor, setSecondaryColor] = useState('#7c3aed');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      window.location.href = '/templates';
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full bg-violet-500/10 blur-[120px]" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/8 blur-[100px]" />
        <div className="absolute top-1/3 left-1/3 h-64 w-64 rounded-full bg-fuchsia-500/6 blur-[80px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          className="mx-auto mb-12 max-w-3xl text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold tracking-wider text-white/70 uppercase backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-violet-400" />
            AI Website Builder
          </motion.span>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Build Your NGO Website{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              with AI
            </span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/50">
            Describe your NGO and let AI generate your website instantly. Customize colors, content,
            and pages to match your mission.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0, 0, 0.2, 1] }}
          className="mx-auto max-w-3xl"
        >
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-10">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-violet-500/5 via-transparent to-fuchsia-500/5" />

            <div className="relative space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <Input
                  label="Organization Name"
                  placeholder="e.g. Hope Foundation"
                  value={orgName}
                  onChange={(e) => setOrgName(e.target.value)}
                  leftIcon={<Building2 className="h-4 w-4" />}
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                />
                <Select
                  label="Category"
                  placeholder="Select category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  options={CATEGORIES}
                  className="border-white/10 bg-white/5 text-white"
                />
              </div>

              <Textarea
                label="Mission Statement"
                placeholder="Describe your NGO's mission, goals, and impact..."
                value={mission}
                onChange={(e) => setMission(e.target.value)}
                className="min-h-[100px] border-white/10 bg-white/5 text-white placeholder:text-white/30"
              />

              <div className="grid gap-6 sm:grid-cols-2">
                <Select
                  label="Country"
                  placeholder="Select country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  options={COUNTRIES}
                  className="border-white/10 bg-white/5 text-white"
                />
                <Input
                  label="Target Audience"
                  placeholder="e.g. Children, Families, Women"
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  leftIcon={<Users className="h-4 w-4" />}
                  className="border-white/10 bg-white/5 text-white placeholder:text-white/30"
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/80">Primary Color</label>
                  <div className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 shrink-0 rounded-xl border border-white/10"
                      style={{ backgroundColor: primaryColor }}
                    />
                    <input
                      type="color"
                      value={primaryColor}
                      onChange={(e) => setPrimaryColor(e.target.value)}
                      className="h-10 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-2"
                      aria-label="Primary color"
                    />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-white/80">Secondary Color</label>
                  <div className="flex items-center gap-3">
                    <div
                      className="h-10 w-10 shrink-0 rounded-xl border border-white/10"
                      style={{ backgroundColor: secondaryColor }}
                    />
                    <input
                      type="color"
                      value={secondaryColor}
                      onChange={(e) => setSecondaryColor(e.target.value)}
                      className="h-10 w-full cursor-pointer rounded-xl border border-white/10 bg-white/5 px-2"
                      aria-label="Secondary color"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-sm font-medium text-white/80">Logo Upload</label>
                <div className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-white/10 bg-white/5 px-4 py-6 transition-colors hover:border-white/20 hover:bg-white/[0.06]">
                  <Upload className="h-5 w-5 text-white/40" />
                  <span className="text-sm text-white/40">Click to upload your logo (SVG, PNG)</span>
                </div>
              </div>

              <div className="pt-2">
                <Button
                  onClick={handleGenerate}
                  disabled={!orgName || !mission || !category}
                  isLoading={isGenerating}
                  loadingText="Generating your website..."
                  size="lg"
                  fullWidth
                  className="bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-500/20 hover:from-violet-500 hover:to-fuchsia-500 hover:shadow-xl hover:shadow-violet-500/30"
                >
                  <Sparkles className="h-5 w-5" />
                  Generate Website
                </Button>
              </div>

              <p className="text-center text-xs text-white/30">
                By clicking generate, you agree to our terms of service. Your website will be ready
                in a few minutes.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mx-auto mt-10 text-center"
        >
          <p className="text-sm text-white/30">
            Prefer a template?{' '}
            <Link
              href="/templates"
              className="font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              Browse our template gallery
              <ArrowRight className="ml-1 inline h-3 w-3" />
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
