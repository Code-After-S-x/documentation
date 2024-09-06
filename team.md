---
layout: page
title: Our team
# Meta property
head:
  - - meta
    - property: og:type
      content: website
  - - meta
    - property: og:title
      content: CAS Docs
  - - meta
    - property: og:image
      content: ./cas2.png
  - - meta
    - name: title
      content: CAS Docs
  - - meta
    - name: twitter:card
      content: ./cas2.png
  - - link
    - rel: icon
      type: image/png
      href: ./cas.png
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

const developers = [
    {
        avatar: 'https://cdn.discordapp.com/avatars/784508294500581386/f2763d220083fa24384a594b38d72675.webp?size=128',
        name: 'MBL',
        title: 'Owner',
        links: [
            { icon: 'github', link: 'https://github.com/brownyprod' },
        ]
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/372428363605999616/b0a218ff6dc73653db8312831f57ed75.webp?size=128',
        name: 'BrownyProd',
        title: 'Associate',
        links: [
            { icon: 'github', link: 'https://github.com/brownyprod' },
        ]
    },
]
const staff = [
    {
        avatar: 'https://cdn.discordapp.com/avatars/835188635414167572/07cc7b9a292b7e47e3300f8cf930e9f1.webp?size=128',
        name: 'Nobody\'s',
        title: 'Admin',
        links: []
    },
    {
        avatar: 'https://cdn.discordapp.com/avatars/972080969282641950/07a4b1298380db0ccf89727903329180.webp?size=128',
        name: 'KamilRedo',
        title: 'Admin',
        links: []
    },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Our Team</template>
    <template #lead></template>
  </VPTeamPageTitle>
  <VPTeamPageSection>
    <template #title>Code After S*x</template>
    <template #lead></template>
    <template #members>
     <VPTeamMembers size="medium" :members="developers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection>
    <template #title>Staff</template>
    <template #lead></template>
    <template #members>
      <VPTeamMembers size="medium" :members="staff" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
