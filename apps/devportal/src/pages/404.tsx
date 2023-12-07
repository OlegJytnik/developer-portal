import { HStack, Heading, Stack } from '@chakra-ui/react';
import Hero from 'ui/components/common/Hero';
import { CenteredContent, VerticalGroup } from 'ui/components/helpers';
import SearchInput from '../components/sitecore-search/SearchInput';
import Layout from '../layouts/Layout';

export default function Custom404() {
  return (
    <Layout title={'This page is not available'} description={'The link you have followed might be broken, or the page has been removed'}>
      <Hero title={'This page is not available'} description={'The link you have followed might be broken, or the page has been removed'} />

      <VerticalGroup>
        <CenteredContent>
          <Stack maxW={'lg'}>
            <Heading size="md" mb="0">
              Maybe you can use our search to find what you are looking for?
            </Heading>
            <HStack>
              <SearchInput showButton />
            </HStack>
          </Stack>
        </CenteredContent>
      </VerticalGroup>
    </Layout>
  );
}
