import Link from "next/link"
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                다
              </div>
              <span className="text-lg font-bold">다정 행정사</span>
            </Link>
            <p className="mt-4 text-sm text-secondary-foreground/80 leading-relaxed">
              국세청 근무경력, 세무법인 근무 등 다양한 경험을 바탕으로
              상담에서부터 각종 서류 작성/대행까지
              종합적인 전문행정 서비스를 제공합니다.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/60">
              주요 업무
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  비자/출입국
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  법인 설립
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  국가유공자
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  민원 행정
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/60">
              바로가기
            </h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link href="/about" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  사무소 소개
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  행정 인사이트
                </Link>
              </li>
              <li>
                <Link href="/about#contact" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  상담 신청
                </Link>
              </li>
              <li>
                <a href="https://blog.naver.com/leeck723" target="_blank" rel="noopener noreferrer" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  네이버 블로그
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-secondary-foreground/60">
              연락처
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                <span className="text-sm text-secondary-foreground/80">
                  서울 중구 퇴계로 324 3층<br />
                  성우빌딩
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="tel:010-8562-7792" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  010-8562-7792
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 flex-shrink-0 text-primary" />
                <a href="mailto:leeck723@naver.com" className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors">
                  leeck723@naver.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-secondary-foreground/60">
              &copy; {new Date().getFullYear()} 다정 행정사 사무소. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                개인정보처리방침
              </Link>
              <Link href="#" className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                이용약관
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
