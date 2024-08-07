import { TrackPageView } from '@/src/components/engagetracker/TrackPageView';
import { ContentHeading } from '@lib/interfaces/contentheading';
import { ChildPageInfo, PageInfo, PagePartialGroup, PartialData, SidebarNavigationConfig } from '@lib/interfaces/page-info';
import SocialFeeds from '@src/components/common/SocialFeeds';
import { MarkDownContent } from '@src/components/markdown/MarkdownContent';
import InPageNav from '@src/components/navigation/InPageNav';
import Layout from '@src/layouts/Layout';
import { useRouter } from 'next/router';
import { Hero } from '../components/common';
import GithubContributionNotice from '../components/common/contribute';
import { ArticlePaging } from '../components/navigation/ArticlePaging';
import { ArticlePagingNext } from '../components/navigation/ArticlePagingNext';
import BreadcrumbNav from '../components/navigation/BreadcrumbNav';
import SidebarNavigation from '../components/navigation/SidebarNavigation';
import { PromoCardProps, PromoList } from '../components/promos';
import { ThreeColumnLayout } from './ThreeColumnLayout';

type ArticlePageProps = {
  pageInfo: PageInfo;
  partials?: PartialData;
  partialGroups?: PagePartialGroup[];
  hasGrid?: boolean;
  promoAfter?: PromoCardProps[];
  promoBefore?: PromoCardProps[];
  childPageInfo?: ChildPageInfo[];
  sidebarConfig: SidebarNavigationConfig;
  customNav?: React.ReactNode;
  customNavPager?: React.ReactNode;
};

const Tutorial = ({ pageInfo, partials, partialGroups, promoAfter, promoBefore, customNav, customNavPager, sidebarConfig }: ArticlePageProps) => {
  const router = useRouter();
  if (!pageInfo) return <>No pageInfo found</>;

  // Check for headings in the content
  const sectionTitles: ContentHeading[] = [];
  if (pageInfo.headings) sectionTitles.push(...pageInfo.headings);

  if (partials) sectionTitles.push(...partials.titles);

  const Nav = pageInfo.hasInPageNav != false ? customNav ? customNav : sectionTitles != null ? <InPageNav titles={sectionTitles} key={router.asPath} /> : null : null;

  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} image={pageInfo.heroImage} productLogo={pageInfo.productLogo} />

        <ThreeColumnLayout sidebar={pageInfo.hasSubPageNav && <SidebarNavigation config={sidebarConfig} />} inPageLinks={sectionTitles} inPageNav={sectionTitles.length > 0 && Nav}>
          <BreadcrumbNav enabled={sidebarConfig.enableBreadcrumb} currentPage={pageInfo} config={sidebarConfig} />
          <ArticlePaging enabled={sidebarConfig.enableNextPrevious} currentPage={pageInfo} config={sidebarConfig} />
          <PromoList data={promoBefore} />
          <MarkDownContent content={pageInfo.parsedContent} partialGroups={partialGroups} partials={partials} />
          <ArticlePagingNext enabled={sidebarConfig.enableNextPrevious} currentPage={pageInfo} config={sidebarConfig} />

          <GithubContributionNotice pageInfo={pageInfo} />
          {customNavPager}

          <PromoList data={promoAfter} />
          <SocialFeeds pageInfo={pageInfo} />
        </ThreeColumnLayout>
      </Layout>
    </TrackPageView>
  );
};

export default Tutorial;
