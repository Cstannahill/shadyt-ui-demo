"use client";

import clsx from "clsx";

interface UserProfileCardProps {
  name: string;
  role?: string;
  avatarUrl: string;
  bio?: string;
  socialLinks?: { label: string; url: string }[];
  className?: string;
  compact?: boolean;
}

/**
 * UserProfileCard
 * ---------------------
 * Displays a user’s avatar, name, role, and optional bio and links.
 *
 * ✅ Use for:
 * - Team pages or about sections
 * - Community contributors
 * - Profile summary in app dashboards
 *
 * 🧠 Design Notes:
 * - Default vertical stack layout
 * - Supports bio, role, and optional social links (GitHub, Twitter, etc.)
 * - Use `compact` to reduce padding and layout for smaller areas
 *
 * 🛠️ Props:
 * - name: string — display name
 * - role?: string — title or role (CTO, Developer, etc.)
 * - avatarUrl: string — image URL
 * - bio?: string — short description
 * - socialLinks?: { label: string; url: string }[] — link out (e.g. GitHub)
 * - compact?: boolean — reduces layout/padding (default: false)
 * - className?: string — extra utility styling
 *
 * 🚀 Example Usage:
 * <UserProfileCard name="Nico R." avatarUrl="/avatars/nico.png" role="Full Stack Dev" />
 *
 * <UserProfileCard
 *   name="Alina K."
 *   role="Product Designer"
 *   avatarUrl="/avatars/alina.jpg"
 *   bio="Focuses on accessibility-first design with delightful interaction."
 *   socialLinks={[
 *     { label: 'GitHub', url: 'https://github.com/alina' },
 *     { label: 'Website', url: 'https://alina.design' },
 *   ]}
 *   className="bg-brand-dark text-white"
 * />
 */

export default function UserProfileCard({
  name,
  role,
  avatarUrl,
  bio,
  socialLinks,
  compact = false,
  className,
}: UserProfileCardProps) {
  return (
    <div
      className={clsx(
        "rounded-xl border border-white/10 bg-white/5 p-6 transition-all text-center",
        compact ? "p-4 text-sm" : "p-6",
        className
      )}
    >
      <img
        src={avatarUrl}
        alt={name}
        className="w-20 h-20 mx-auto rounded-full object-cover mb-4 shadow"
      />

      <div className="font-semibold text-lg">{name}</div>

      {role && <div className="text-sm opacity-70 mb-2">{role}</div>}

      {bio && <p className="text-sm opacity-80 mb-3">{bio}</p>}

      {socialLinks && socialLinks.length > 0 && (
        <ul className="flex justify-center gap-3 text-sm text-brand mt-3">
          {socialLinks.map((link, idx) => (
            <li key={idx}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
