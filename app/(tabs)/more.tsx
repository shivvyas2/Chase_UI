import { IconSymbol } from '@/components/ui/icon-symbol';
import React from 'react';
import { ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function MoreScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <IconSymbol name="plus" size={28} color="#0066CC" />
        </TouchableOpacity>
        <View style={styles.logoContainer}>
          <View style={styles.chaseLogo}>
            <View style={styles.logoInner} />
          </View>
        </View>
        <TouchableOpacity style={styles.headerButton}>
          <IconSymbol name="person.circle.fill" size={28} color="#0066CC" />
        </TouchableOpacity>
      </View>

      {/* Unified scroll: search + quick actions + content to eliminate seams */}
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Search */}
        <View style={styles.searchRow}>
          <View style={styles.searchBar}>
            <Text style={styles.searchPlaceholder}>What are you looking for?</Text>
          </View>
          <TouchableOpacity style={styles.helpButton}>
            <IconSymbol name="questionmark" size={20} color="white" />
          </TouchableOpacity>
        </View>

        {/* Quick actions */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.quickRow}>
          <TouchableOpacity style={styles.actionButton}>
            <IconSymbol name="plus" size={16} color="#0066CC" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}><Text style={styles.actionText}>Send | Zelle®</Text></TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}><Text style={styles.actionText}>Deposit checks</Text></TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}><Text style={styles.actionText}>Pay bills</Text></TouchableOpacity>
        </ScrollView>

        {/* Cards */}
        {renderSection('Account Settings', [
          ['person', 'Profile settings'],
          ['bell', 'Notifications'],
          ['lock', 'Security settings'],
          ['creditcard', 'Card management'],
        ])}

        {renderSection('Support', [
          ['questionmark.circle', 'Help center'],
          ['phone', 'Contact us'],
          ['message', 'Live chat'],
          ['location', 'Find branches'],
        ])}

        {renderSection('Benefits & Travel', [
          ['airplane', 'Travel portal'],
          ['star', 'Rewards points'],
          ['gift', 'Card benefits'],
        ])}

        {renderSection('Plan & Track', [
          ['chart.bar', 'Spending insights'],
          ['target', 'Savings goals'],
          ['calendar', 'Budget tracking'],
        ])}

        {renderSection('Business Services', [
          ['building.2', 'Business banking'],
          ['chart.line.uptrend.xyaxis', 'Business insights'],
          ['doc.text', 'Business reports'],
        ])}

        {renderSection('Legal & Privacy', [
          ['doc', 'Terms of service'],
          ['lock.shield', 'Privacy policy'],
          ['info.circle', 'About Chase'],
        ])}
      </ScrollView>
    </SafeAreaView>
  );
}

function renderSection(title: string, rows: [string, string][]) {
  return (
    <View style={styles.featureCard}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardHeaderText}>{title}</Text>
      </View>
      <View style={styles.cardContent}>
        {rows.map(([icon, text], idx) => (
          <TouchableOpacity style={[styles.featureItem, idx === rows.length - 1 && { borderBottomWidth: 0 }]} key={text}>
            <IconSymbol name={icon as any} size={24} color="#0066CC" />
            <Text style={styles.featureText}>{text}</Text>
            <IconSymbol name="chevron.right" size={16} color="#999999" />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white' },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingHorizontal: 20, paddingVertical: 16, backgroundColor: 'white',
  },
  headerButton: { padding: 12, borderRadius: 8 },
  logoContainer: { alignItems: 'center', justifyContent: 'center' },
  chaseLogo: {
    width: 44, height: 44, backgroundColor: '#0066CC', borderRadius: 6,
    alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 3, elevation: 3,
  },
  logoInner: { width: 24, height: 24, backgroundColor: 'white', borderRadius: 2, transform: [{ rotate: '45deg' }] },

  scroll: { flex: 1 },
  scrollContent: { paddingHorizontal: 20, paddingBottom: 24, paddingTop: 0 },

  searchRow: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', marginBottom: 12 },
  searchBar: {
    flex: 1, backgroundColor: '#F8F9FA', borderRadius: 12, paddingHorizontal: 20, paddingVertical: 16, marginRight: 16,
    shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 2, elevation: 1,
  },
  searchPlaceholder: { color: '#8E8E93', fontSize: 17, fontWeight: '400' },
  helpButton: { padding: 12, backgroundColor: '#0066CC', borderRadius: 20, width: 40, height: 40, alignItems: 'center', justifyContent: 'center' },

  quickRow: { paddingRight: 20, marginBottom: 8 },
  actionButton: {
    backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 8, paddingVertical: 6, marginRight: 8, minWidth: 60, height: 32,
    alignItems: 'center', justifyContent: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.05, shadowRadius: 1, elevation: 1,
  },
  actionText: { fontSize: 11, fontWeight: '500', color: '#1C1C1E', textAlign: 'center' },

  featureCard: { backgroundColor: 'white', borderRadius: 12, marginBottom: 16, overflow: 'hidden', borderWidth: 1, borderColor: '#E5E5E5' },
  cardHeader: { backgroundColor: '#0066CC', paddingHorizontal: 16, paddingVertical: 12 },
  cardHeaderText: { color: 'white', fontSize: 16, fontWeight: '600' },
  cardContent: { padding: 16 },
  featureItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#E5E5E5' },
  featureText: { flex: 1, fontSize: 16, fontWeight: '500', color: '#000000', marginLeft: 16 },
});

