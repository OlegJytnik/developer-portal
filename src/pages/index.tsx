import { TrackPageView } from '@/src/components/integrations/engage/TrackPageView';
import { SimpleGrid } from '@chakra-ui/react';
import { CTACard } from '@components/cards';
import communityListData from '@data/data-community-list';
import platformData from '@data/data-platform';
import updatesListData from '@data/data-updates';
import getHelpCta from '@data/promos/get-help';
import { PageInfo } from '@lib/interfaces/page-info';
import { getPageInfo } from '@lib/page-info';
import ChangelogEntries from '@src/components/changelog/ChangelogEntries';
import Layout from '@src/layouts/Layout';
import { NextPage } from 'next';

import { SitecoreCommunityBlog, SitecoreCommunityEvents, SitecoreCommunityNews, SitecoreCommunityQuestions, StackExchangeFeed, YouTubeFeed } from '@components/integrations';
import { GenericList } from '@components/lists';
import ProductList from '@components/lists/products/productList';
import { CenteredContent, Hero, VerticalGroup } from '@components/ui/sections';

export async function getStaticProps() {
  const pageInfo = await getPageInfo('home');

  return {
    props: {
      pageInfo,
    },
    revalidate: 600, // 10 minutes
  };
}

type HomePageProps = {
  pageInfo: PageInfo;
  preview: boolean;
};

const HomePage: NextPage<HomePageProps> = ({ pageInfo }) => {
  return (
    <TrackPageView pageInfo={pageInfo}>
      <Layout title={pageInfo.title} description={pageInfo.description} openGraphImage={pageInfo.openGraphImage}>
        <Hero title={pageInfo.title} description={pageInfo.description} />

        <VerticalGroup background={'chakra-bg'}>
          <CenteredContent>
            <SimpleGrid py={{ base: 0, md: 4 }} gap={{ base: 0, md: 4 }} columns={[1, 1, 2]}>
              <ChangelogEntries entries={pageInfo.changelogEntries} title="Latest changelog updates" linkText="Full changelog" />
              <SitecoreCommunityBlog entries={pageInfo.sitecoreCommunity.blog} sortKeys={pageInfo.sitecoreCommunityBlogSort} listItem={true} />
            </SimpleGrid>

            <GenericList title={updatesListData.title} subtitle={updatesListData.subtitle} data={updatesListData.data} />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup background={'chakra-subtle-bg'}>
          <CenteredContent>
            <ProductList />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup backgroundImage={'https://delivery-sitecore.sitecorecontenthub.cloud/api/public/content/bg-power-gradient'} backgroundSize={'cover'} color={'primary.50'} textAlign={{ base: 'left', md: 'center' }}>
          <CenteredContent>
            <GenericList title={platformData.title} subtitle={platformData.subtitle} data={platformData.data} column={3} width={{ base: 'full', md: '2xs' }} cardVariant="blurred" />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup background={'chakra-bg'}>
          <CenteredContent>
            <SitecoreCommunityNews data={pageInfo.sitecoreCommunity.news} title="Community news" />
            <SitecoreCommunityEvents data={pageInfo.sitecoreCommunity.events} title="Community Events" />
            <YouTubeFeed data={pageInfo.youtube} title={pageInfo.youtubeTitle} playlistTitle={pageInfo.youtubePlaylistTitle} />
            <GenericList data={communityListData.data} title={communityListData.title} subtitle={communityListData.subtitle} column={3} cardVariant="borderedImage" />
          </CenteredContent>
        </VerticalGroup>

        {/* <VerticalGroup background={'gray.700'}>
          <CenteredContent gap={6}>
            <Heading as="h2" color={'white'} mb={0}>
              Explore Sitecore by solution
            </Heading>
            <Text variant={'large'} color={'white'}>
              How can we help you today? Get all the information you want, depending on your business’s needs.
            </Text>
            <CategoryTileList cards={productSolutions} />
          </CenteredContent>
        </VerticalGroup> */}

        <VerticalGroup>
          <CenteredContent>
            <CTACard {...getHelpCta} />
          </CenteredContent>
        </VerticalGroup>

        <VerticalGroup>
          <CenteredContent>
            <SitecoreCommunityQuestions data={pageInfo.sitecoreCommunity.questions} sortKeys={pageInfo.sitecoreCommunityQuestionsSort} forumKeys={pageInfo.sitecoreCommunityQuestionsCategory} />
            <StackExchangeFeed data={pageInfo.stackexchange} />
          </CenteredContent>
        </VerticalGroup>
      </Layout>
    </TrackPageView>
  );
};

export default HomePage;
