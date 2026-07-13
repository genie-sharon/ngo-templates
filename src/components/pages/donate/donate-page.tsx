'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Heart,
  Lock,
  ShieldCheck,
  ChevronRight,
  ChevronLeft,
  Check,
  CreditCard,
  Landmark,
  Wallet,
  Globe,
  Gift,
} from 'lucide-react';
import { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui/atoms/button';
import { cn } from '@/lib/utils';
import { formatCurrency } from '@/lib/utils';

import { PageHero } from '../blocks/page-hero';
import type { PageHeroConfig } from '../page-config.types';

export type DonateLayout = 'single-step' | 'multi-step' | 'side-by-side';

export interface AmountPreset {
  value: number;
  label?: string;
}

export interface DonationCause {
  id: string;
  label: string;
  description?: string;
}

export interface PaymentMethod {
  id: string;
  label: string;
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  validation?: Record<string, unknown>;
}

export interface ImpactPreview {
  amount: number;
  description: string;
}

export interface TrustBadge {
  icon: 'lock' | 'shield' | 'check' | 'globe';
  label: string;
  description?: string;
}

export interface DonatePageConfig {
  hero: PageHeroConfig;
  layout: DonateLayout;
  amountPresets: AmountPreset[];
  frequencies: { id: string; label: string }[];
  defaultFrequency?: string;
  causes: DonationCause[];
  paymentMethods: PaymentMethod[];
  formFields: FormField[];
  impactPreview: ImpactPreview[];
  trustBadges: TrustBadge[];
  submitLabel?: string;
  onSubmit?: (data: Record<string, unknown>) => void;
}

const frequencyIcons: Record<string, React.ReactNode> = {
  'one-time': <Gift className="h-4 w-4" />,
  monthly: <Heart className="h-4 w-4" />,
  yearly: <Globe className="h-4 w-4" />,
};

const paymentIcons: Record<string, React.ReactNode> = {
  credit: <CreditCard className="h-5 w-5" />,
  debit: <CreditCard className="h-5 w-5" />,
  paypal: <Wallet className="h-5 w-5" />,
  bank: <Landmark className="h-5 w-5" />,
};

const trustIconMap: Record<string, React.ReactNode> = {
  lock: <Lock className="h-5 w-5" />,
  shield: <ShieldCheck className="h-5 w-5" />,
  check: <Check className="h-5 w-5" />,
  globe: <Globe className="h-5 w-5" />,
};

function DonorInfoForm({
  fields,
  register,
  errors,
}: {
  fields: FormField[];
  register: ReturnType<typeof useForm>['register'];
  errors: Record<string, unknown>;
}) {
  return (
    <div className="space-y-5">
      {fields.map((field) => (
        <div key={field.name}>
          <label
            htmlFor={`donate-${field.name}`}
            className="mb-1.5 block text-sm font-medium text-[var(--kindonar-color-neutral-700)]"
          >
            {field.label}
            {field.required && (
              <span className="ml-0.5 text-[var(--kindonar-color-error-500)]" aria-hidden="true">
                *
              </span>
            )}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              id={`donate-${field.name}`}
              rows={3}
              placeholder={field.placeholder}
              className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-2.5 text-sm text-[var(--kindonar-color-neutral-900)] transition-colors outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
              {...register(field.name, { required: field.required })}
            />
          ) : field.type === 'select' && field.options ? (
            <select
              id={`donate-${field.name}`}
              className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-2.5 text-sm text-[var(--kindonar-color-neutral-900)] transition-colors outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
              {...register(field.name, { required: field.required })}
            >
              <option value="">Select...</option>
              {field.options.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={`donate-${field.name}`}
              type={field.type}
              placeholder={field.placeholder}
              className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-2.5 text-sm text-[var(--kindonar-color-neutral-900)] transition-colors outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
              {...register(field.name, { required: field.required })}
            />
          )}
          {!!(errors[field.name] && typeof errors[field.name] === 'object') && (
            <p className="mt-1 text-xs text-[var(--kindonar-color-error-500)]" role="alert">
              {field.label} is required
            </p>
          )}
        </div>
      ))}
    </div>
  );
}

function AmountSelector({
  presets,
  selected,
  onSelect,
  customAmount,
  onCustomChange,
}: {
  presets: AmountPreset[];
  selected: number | null;
  onSelect: (amount: number) => void;
  customAmount: string;
  onCustomChange: (val: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
        Select amount
      </p>
      <div className="mb-3 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {presets.map((preset) => (
          <button
            key={preset.value}
            type="button"
            onClick={() => onSelect(preset.value)}
            className={cn(
              'rounded-xl border-2 px-4 py-3 text-center text-lg font-bold transition-all',
              selected === preset.value
                ? 'border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-50)] text-[var(--kindonar-color-primary-700)]'
                : 'border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-700)] hover:border-[var(--kindonar-color-primary-300)]',
            )}
            aria-pressed={selected === preset.value}
          >
            {preset.label || formatCurrency(preset.value)}
          </button>
        ))}
        <button
          type="button"
          onClick={() => onSelect(-1)}
          className={cn(
            'rounded-xl border-2 border-dashed px-4 py-3 text-center text-sm font-semibold transition-all',
            selected === -1
              ? 'border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-50)] text-[var(--kindonar-color-primary-700)]'
              : 'border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-500)] hover:border-[var(--kindonar-color-primary-300)]',
          )}
          aria-pressed={selected === -1}
        >
          Custom
        </button>
      </div>
      {selected === -1 && (
        <div>
          <label
            htmlFor="donate-custom-amount"
            className="mb-1.5 block text-sm font-medium text-[var(--kindonar-color-neutral-700)]"
          >
            Enter your amount
          </label>
          <input
            id="donate-custom-amount"
            type="number"
            min={1}
            value={customAmount}
            onChange={(e) => onCustomChange(e.target.value)}
            placeholder="0.00"
            className="w-full rounded-lg border border-[var(--kindonar-border-default)] px-4 py-3 text-lg font-bold text-[var(--kindonar-color-neutral-900)] outline-none focus:border-[var(--kindonar-color-primary-500)] focus:ring-2 focus:ring-[var(--kindonar-color-primary-200)]"
          />
        </div>
      )}
    </div>
  );
}

function FrequencyToggle({
  frequencies,
  selected,
  onChange,
}: {
  frequencies: { id: string; label: string }[];
  selected: string;
  onChange: (id: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-[var(--kindonar-color-neutral-700)]">Frequency</p>
      <div
        className="flex rounded-lg border border-[var(--kindonar-border-default)] p-1"
        role="radiogroup"
        aria-label="Donation frequency"
      >
        {frequencies.map((freq) => (
          <button
            key={freq.id}
            type="button"
            role="radio"
            aria-checked={selected === freq.id}
            onClick={() => onChange(freq.id)}
            className={cn(
              'flex flex-1 items-center justify-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-all',
              selected === freq.id
                ? 'bg-[var(--kindonar-color-primary-500)] text-white shadow-sm'
                : 'text-[var(--kindonar-color-neutral-600)] hover:text-[var(--kindonar-color-neutral-900)]',
            )}
          >
            {frequencyIcons[freq.id] || <Heart className="h-4 w-4" />}
            {freq.label}
          </button>
        ))}
      </div>
    </div>
  );
}

function CauseSelector({
  causes,
  selected,
  onChange,
}: {
  causes: DonationCause[];
  selected: string[];
  onChange: (id: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
        Where should your donation go?
      </p>
      <div className="space-y-2">
        {causes.map((cause) => {
          const isSelected = selected.includes(cause.id);
          return (
            <button
              key={cause.id}
              type="button"
              role="checkbox"
              aria-checked={isSelected}
              onClick={() => onChange(cause.id)}
              className={cn(
                'flex w-full items-center gap-3 rounded-xl border-2 px-4 py-3 text-left transition-all',
                isSelected
                  ? 'border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-50)]'
                  : 'border-[var(--kindonar-border-default)] hover:border-[var(--kindonar-color-primary-300)]',
              )}
            >
              <span
                className={cn(
                  'flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-all',
                  isSelected
                    ? 'border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-500)] text-white'
                    : 'border-[var(--kindonar-color-neutral-400)]',
                )}
              >
                {isSelected && <Check className="h-3 w-3" />}
              </span>
              <div>
                <p className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">
                  {cause.label}
                </p>
                {cause.description && (
                  <p className="text-xs text-[var(--kindonar-color-neutral-500)]">
                    {cause.description}
                  </p>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function PaymentMethodSelector({
  methods,
  selected,
  onChange,
}: {
  methods: PaymentMethod[];
  selected: string;
  onChange: (id: string) => void;
}) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-[var(--kindonar-color-neutral-700)]">
        Payment method
      </p>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {methods.map((method) => (
          <button
            key={method.id}
            type="button"
            role="radio"
            aria-checked={selected === method.id}
            onClick={() => onChange(method.id)}
            className={cn(
              'flex flex-col items-center gap-2 rounded-xl border-2 px-3 py-3 text-center text-sm font-medium transition-all',
              selected === method.id
                ? 'border-[var(--kindonar-color-primary-500)] bg-[var(--kindonar-color-primary-50)] text-[var(--kindonar-color-primary-700)]'
                : 'border-[var(--kindonar-border-default)] text-[var(--kindonar-color-neutral-600)] hover:border-[var(--kindonar-color-primary-300)]',
            )}
          >
            {paymentIcons[method.id] || <CreditCard className="h-5 w-5" />}
            <span>{method.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

function TrustBadges({ badges }: { badges: TrustBadge[] }) {
  return (
    <div className="flex flex-wrap gap-4">
      {badges.map((badge, idx) => (
        <div
          key={idx}
          className="flex items-center gap-2 text-xs text-[var(--kindonar-color-neutral-500)]"
        >
          <span className="text-[var(--kindonar-color-primary-500)]">
            {trustIconMap[badge.icon]}
          </span>
          <span>{badge.label}</span>
        </div>
      ))}
    </div>
  );
}

function ImpactPreviewBlock({ items }: { items: ImpactPreview[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, idx) => (
        <div
          key={idx}
          className="flex items-start gap-3 rounded-xl bg-[var(--kindonar-color-primary-50)] p-4"
        >
          <Heart
            className="mt-0.5 h-5 w-5 shrink-0 text-[var(--kindonar-color-primary-500)]"
            aria-hidden="true"
          />
          <div>
            <p className="text-lg font-bold text-[var(--kindonar-color-primary-700)]">
              {formatCurrency(item.amount)}
            </p>
            <p className="text-sm text-[var(--kindonar-color-neutral-600)]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function DonateFormSideBySide({ config }: { config: DonatePageConfig }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState(
    config.defaultFrequency || config.frequencies[0]?.id || 'one-time',
  );
  const [selectedCauses, setSelectedCauses] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState(config.paymentMethods[0]?.id || '');

  const toggleCause = useCallback((id: string) => {
    setSelectedCauses((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
  }, []);

  const onSubmit = handleSubmit((data) => {
    config.onSubmit?.({
      ...data,
      amount,
      customAmount,
      frequency,
      causes: selectedCauses,
      paymentMethod,
    });
  });

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <form onSubmit={onSubmit} className="space-y-8" noValidate>
          <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
            <AmountSelector
              presets={config.amountPresets}
              selected={amount}
              onSelect={setAmount}
              customAmount={customAmount}
              onCustomChange={setCustomAmount}
            />
          </div>
          <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
            <FrequencyToggle
              frequencies={config.frequencies}
              selected={frequency}
              onChange={setFrequency}
            />
          </div>
          <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
            <CauseSelector
              causes={config.causes}
              selected={selectedCauses}
              onChange={toggleCause}
            />
          </div>
          <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
            <PaymentMethodSelector
              methods={config.paymentMethods}
              selected={paymentMethod}
              onChange={setPaymentMethod}
            />
          </div>
          <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
            <DonorInfoForm fields={config.formFields} register={register} errors={errors} />
          </div>
          <Button variant="donate" size="xl" fullWidth type="submit" className="text-base">
            <Heart className="h-5 w-5" aria-hidden="true" />
            {config.submitLabel || 'Donate Now'}
          </Button>
          {config.trustBadges.length > 0 && (
            <div className="flex justify-center">
              <TrustBadges badges={config.trustBadges} />
            </div>
          )}
        </form>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-8 lg:sticky lg:top-24 lg:self-start"
      >
        <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
          <h3 className="mb-6 text-xl font-bold text-[var(--kindonar-color-neutral-900)]">
            Your Impact
          </h3>
          <ImpactPreviewBlock items={config.impactPreview} />
        </div>
        <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-color-primary-50)] p-6 text-center md:p-8">
          <ShieldCheck
            className="mx-auto mb-3 h-10 w-10 text-[var(--kindonar-color-primary-500)]"
            aria-hidden="true"
          />
          <p className="text-sm font-semibold text-[var(--kindonar-color-neutral-900)]">
            100% Secure
          </p>
          <p className="mt-1 text-xs text-[var(--kindonar-color-neutral-500)]">
            Your information is protected by industry-standard encryption.
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function DonateFormSingleStep({ config }: { config: DonatePageConfig }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState(
    config.defaultFrequency || config.frequencies[0]?.id || 'one-time',
  );
  const [selectedCauses, setSelectedCauses] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState(config.paymentMethods[0]?.id || '');

  const toggleCause = useCallback((id: string) => {
    setSelectedCauses((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
  }, []);

  const onSubmit = handleSubmit((data) => {
    config.onSubmit?.({
      ...data,
      amount,
      customAmount,
      frequency,
      causes: selectedCauses,
      paymentMethod,
    });
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <form onSubmit={onSubmit} className="space-y-8" noValidate>
        <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
          <h3 className="mb-6 text-xl font-bold text-[var(--kindonar-color-neutral-900)]">
            Choose your donation
          </h3>
          <div className="space-y-6">
            <AmountSelector
              presets={config.amountPresets}
              selected={amount}
              onSelect={setAmount}
              customAmount={customAmount}
              onCustomChange={setCustomAmount}
            />
            <FrequencyToggle
              frequencies={config.frequencies}
              selected={frequency}
              onChange={setFrequency}
            />
            <CauseSelector
              causes={config.causes}
              selected={selectedCauses}
              onChange={toggleCause}
            />
            <PaymentMethodSelector
              methods={config.paymentMethods}
              selected={paymentMethod}
              onChange={setPaymentMethod}
            />
          </div>
        </div>
        <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
          <h3 className="mb-6 text-xl font-bold text-[var(--kindonar-color-neutral-900)]">
            Your Information
          </h3>
          <DonorInfoForm fields={config.formFields} register={register} errors={errors} />
        </div>
        {config.impactPreview.length > 0 && (
          <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
            <h3 className="mb-6 text-xl font-bold text-[var(--kindonar-color-neutral-900)]">
              Your Impact
            </h3>
            <ImpactPreviewBlock items={config.impactPreview} />
          </div>
        )}
        <div className="text-center">
          <Button variant="donate" size="xl" fullWidth type="submit" className="text-base">
            <Heart className="h-5 w-5" aria-hidden="true" />
            {config.submitLabel || 'Donate Now'}
          </Button>
          {config.trustBadges.length > 0 && (
            <div className="mt-4 flex justify-center">
              <TrustBadges badges={config.trustBadges} />
            </div>
          )}
        </div>
      </form>
    </motion.div>
  );
}

function DonateFormMultiStep({ config }: { config: DonatePageConfig }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [step, setStep] = useState(0);
  const [amount, setAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState(
    config.defaultFrequency || config.frequencies[0]?.id || 'one-time',
  );
  const [selectedCauses, setSelectedCauses] = useState<string[]>([]);
  const [paymentMethod, setPaymentMethod] = useState(config.paymentMethods[0]?.id || '');

  const toggleCause = useCallback((id: string) => {
    setSelectedCauses((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]));
  }, []);

  const steps = [
    {
      title: 'Amount & Frequency',
      content: (
        <div className="space-y-6">
          <AmountSelector
            presets={config.amountPresets}
            selected={amount}
            onSelect={setAmount}
            customAmount={customAmount}
            onCustomChange={setCustomAmount}
          />
          <FrequencyToggle
            frequencies={config.frequencies}
            selected={frequency}
            onChange={setFrequency}
          />
        </div>
      ),
    },
    {
      title: 'Cause & Payment',
      content: (
        <div className="space-y-6">
          <CauseSelector causes={config.causes} selected={selectedCauses} onChange={toggleCause} />
          <PaymentMethodSelector
            methods={config.paymentMethods}
            selected={paymentMethod}
            onChange={setPaymentMethod}
          />
        </div>
      ),
    },
    {
      title: 'Your Info',
      content: <DonorInfoForm fields={config.formFields} register={register} errors={errors} />,
    },
    {
      title: 'Review & Submit',
      content: (
        <div className="space-y-6">
          <div className="rounded-xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-interactive)] p-4">
            <h4 className="mb-3 font-semibold text-[var(--kindonar-color-neutral-900)]">
              Donation Summary
            </h4>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-[var(--kindonar-color-neutral-500)]">Amount</dt>
                <dd className="font-semibold text-[var(--kindonar-color-neutral-900)]">
                  {amount && amount > 0
                    ? formatCurrency(amount)
                    : formatCurrency(Number(customAmount) || 0)}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--kindonar-color-neutral-500)]">Frequency</dt>
                <dd className="font-semibold text-[var(--kindonar-color-neutral-900)]">
                  {config.frequencies.find((f) => f.id === frequency)?.label || frequency}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-[var(--kindonar-color-neutral-500)]">Payment</dt>
                <dd className="font-semibold text-[var(--kindonar-color-neutral-900)]">
                  {config.paymentMethods.find((p) => p.id === paymentMethod)?.label ||
                    paymentMethod}
                </dd>
              </div>
            </dl>
          </div>
          {config.impactPreview.length > 0 && (
            <div>
              <h4 className="mb-3 font-semibold text-[var(--kindonar-color-neutral-900)]">
                Your Impact
              </h4>
              <ImpactPreviewBlock items={config.impactPreview} />
            </div>
          )}
        </div>
      ),
    },
  ];

  const onSubmit = handleSubmit((data) => {
    config.onSubmit?.({
      ...data,
      amount,
      customAmount,
      frequency,
      causes: selectedCauses,
      paymentMethod,
    });
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-8">
        <nav aria-label="Donation steps" className="flex items-center justify-center gap-2">
          {steps.map((s, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => idx < step && setStep(idx)}
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors',
                idx <= step
                  ? 'text-[var(--kindonar-color-primary-600)]'
                  : 'text-[var(--kindonar-color-neutral-400)]',
                idx < step && 'cursor-pointer hover:text-[var(--kindonar-color-primary-500)]',
                idx > step && 'cursor-default',
              )}
              aria-current={idx === step ? 'step' : undefined}
            >
              <span
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold transition-all',
                  idx < step
                    ? 'bg-[var(--kindonar-color-primary-500)] text-white'
                    : idx === step
                      ? 'border-2 border-[var(--kindonar-color-primary-500)] text-[var(--kindonar-color-primary-600)]'
                      : 'border-2 border-[var(--kindonar-color-neutral-300)] text-[var(--kindonar-color-neutral-400)]',
                )}
              >
                {idx < step ? <Check className="h-4 w-4" /> : idx + 1}
              </span>
              <span className="hidden sm:inline">{s.title}</span>
              {idx < steps.length - 1 && (
                <ChevronRight className="hidden h-4 w-4 sm:block" aria-hidden="true" />
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="rounded-2xl border border-[var(--kindonar-border-default)] bg-[var(--kindonar-surface-raised)] p-6 md:p-8">
        <h3 className="mb-6 text-xl font-bold text-[var(--kindonar-color-neutral-900)]">
          {steps[step]!.title}
        </h3>
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            {steps[step]!.content}
          </motion.div>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-between border-t border-[var(--kindonar-border-default)] pt-6">
          <Button
            type="button"
            variant="outline"
            size="md"
            onClick={() => setStep((p) => Math.max(0, p - 1))}
            disabled={step === 0}
          >
            <ChevronLeft className="h-4 w-4" aria-hidden="true" /> Back
          </Button>
          {step < steps.length - 1 ? (
            <Button
              type="button"
              variant="primary"
              size="md"
              onClick={() => setStep((p) => Math.min(steps.length - 1, p + 1))}
            >
              Next <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          ) : (
            <Button variant="donate" size="lg" type="submit" onClick={onSubmit}>
              <Heart className="h-4 w-4" aria-hidden="true" />
              {config.submitLabel || 'Donate Now'}
            </Button>
          )}
        </div>
      </div>
      {config.trustBadges.length > 0 && (
        <div className="mt-6 flex justify-center">
          <TrustBadges badges={config.trustBadges} />
        </div>
      )}
    </motion.div>
  );
}

export function DonatePage({
  config,
  className,
}: {
  config: DonatePageConfig;
  className?: string;
}) {
  const renderForm = () => {
    switch (config.layout) {
      case 'multi-step':
        return <DonateFormMultiStep config={config} />;
      case 'side-by-side':
        return <DonateFormSideBySide config={config} />;
      default:
        return <DonateFormSingleStep config={config} />;
    }
  };

  return (
    <div className={cn(className)}>
      <PageHero config={config.hero} />
      <section className="py-16 md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8">{renderForm()}</div>
      </section>
    </div>
  );
}
