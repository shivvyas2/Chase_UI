import { IconSymbol } from '@/components/ui/icon-symbol';
import { useRouter } from 'expo-router';
import React from 'react';
import { ActivityIndicator, Image, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CreditScoreProgressBar from '@/components/credit-score-progress-bar';
import { useCreditProfile } from '@/hooks/useCreditProfile';

export default function AccountsScreen() {
  const router = useRouter();
  const { experianData, isLoading } = useCreditProfile();
  
  // Extract credit score - prefer traditional credit score (300-850), fallback to Intelliscore (0-100)
  const traditionalScore = experianData?.creditScore || experianData?.score || null;
  const intelliscore = experianData?.data?.scoreInformation?.commercialScore?.score || 
                       experianData?.data?.scoreInformation?.fsrScore?.score || 
                       null;
  
  // Use traditional score if available, otherwise use Intelliscore
  const creditScore = traditionalScore !== null ? traditionalScore : intelliscore;
  const isTraditionalScore = traditionalScore !== null;
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerButton}>
          <View style={styles.walletIcon}>
            <IconSymbol name="creditcard" size={20} color="#0066CC" />
            <View style={styles.plusOverlay}>
              <IconSymbol name="plus" size={12} color="#0066CC" />
            </View>
          </View>
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

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Text style={styles.searchPlaceholder}>What are you looking for?</Text>
        </View>
        <TouchableOpacity style={styles.helpButton}>
          <IconSymbol name="questionmark" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {/* Quick Actions */}
      <View style={styles.quickActionsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.quickActions}>
          <TouchableOpacity style={styles.actionButton}>
            <IconSymbol name="plus" size={16} color="#0066CC" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Send | Zelle®</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Deposit checks</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Text style={styles.actionText}>Pay bills</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

      {/* Accounts Section */}
      <ScrollView style={styles.accountsSection} showsVerticalScrollIndicator={false}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Accounts</Text>
          <TouchableOpacity>
            <IconSymbol name="ellipsis" size={20} color="#999999" />
          </TouchableOpacity>
        </View>

        {/* Bank Accounts */}
        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Bank accounts (2)</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>BUSINESS ACCOUNT (...8472)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$12,847.32</Text>
                <Text style={styles.balanceLabel}>Available balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
          </View>
        </View>

        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Business Checking</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>CHASE BUSINESS (...2951)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$8,429.67</Text>
                <Text style={styles.balanceLabel}>Available balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
          </View>
        </View>

        {/* Credit Cards */}
        <View style={styles.accountCard}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardHeaderText}>Credit cards (1)</Text>
          </View>
          <View style={styles.cardContent}>
            <TouchableOpacity style={styles.accountItem}>
              <Text style={styles.accountName}>Chase Ink Business Cash Card (...7384)</Text>
              <IconSymbol name="chevron.right" size={16} color="#999999" />
            </TouchableOpacity>
            
            {/* Credit Card Image */}
            <Image
              source={require('@/assets/cards/card1.png')}
              style={styles.creditCardImage}
            />
            
            <View style={styles.balanceContainer}>
              <View style={styles.balanceTextContainer}>
                <Text style={styles.balanceAmount}>$1,247.89</Text>
                <Text style={styles.balanceLabel}>Current balance</Text>
              </View>
              <View style={styles.verticalLine} />
            </View>
            
            <View style={styles.paymentStatus}>
              <IconSymbol name="checkmark.circle.fill" size={16} color="#00AA00" />
              <Text style={styles.paymentText}>You don't have a payment due right now.</Text>
            </View>
          </View>
        </View>

        {/* Lumiq Credit Journey promo */}
        <View style={styles.promoCard}>
          <View style={styles.promoContent}>
            <View style={styles.promoLeft}>
              <Text style={styles.promoHeading}>Lumiq Credit Journey</Text>
              <Text style={styles.promoTitle}>Get your latest credit score</Text>
              <Text style={styles.promoProvider}>Intelliscore v2</Text>
            </View>
          </View>
          <View style={styles.progressBarWrapper}>
            {isLoading ? (
              <View style={styles.loadingContainer}>
                <ActivityIndicator size="small" color="#0066CC" />
                <Text style={styles.loadingText}>Loading score...</Text>
              </View>
            ) : creditScore !== null ? (
              <CreditScoreProgressBar 
                score={creditScore} 
                minScore={isTraditionalScore ? 300 : 0} 
                maxScore={isTraditionalScore ? 850 : 100}
              />
            ) : (
              <CreditScoreProgressBar 
                score={603} 
                minScore={300} 
                maxScore={850}
              />
            )}
          </View>
          <TouchableOpacity style={styles.promoButton} onPress={() => router.push('/credit-journey')}>
            <Text style={styles.promoButtonText}>See latest score</Text>
          </TouchableOpacity>
        </View>

        {/* Link External Accounts */}
        <TouchableOpacity style={styles.linkAccounts}>
          <Text style={styles.linkAccountsText}>Link external accounts</Text>
          <IconSymbol name="chevron.right" size={16} color="#999999" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: 'white',
  },
  headerButton: {
    padding: 12,
    borderRadius: 8,
  },
  walletIcon: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  plusOverlay: {
    position: 'absolute',
    top: -2,
    right: -2,
    backgroundColor: 'white',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#0066CC',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  chaseLogo: {
    width: 44,
    height: 44,
    backgroundColor: '#0066CC',
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  logoInner: {
    width: 24,
    height: 24,
    backgroundColor: 'white',
    borderRadius: 2,
    transform: [{ rotate: '45deg' }],
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    backgroundColor: 'white',
  },
  searchBar: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 16,
    marginRight: 16,
    borderWidth: 0,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  searchPlaceholder: {
    color: '#8E8E93',
    fontSize: 17,
    fontWeight: '400',
  },
  helpButton: {
    padding: 12,
    backgroundColor: '#0066CC',
    borderRadius: 20,
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quickActionsContainer: {
    paddingHorizontal: 20,
    marginBottom: 0,
  },
  quickActions: {
    flexDirection: 'row',
  },
  actionButton: {
    backgroundColor: 'white',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 6,
    marginRight: 8,
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: 60,
    height: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 1,
    elevation: 1,
  },
  actionText: {
    fontSize: 11,
    fontWeight: '500',
    color: '#1C1C1E',
    textAlign: 'center',
  },
  accountsSection: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 0,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  accountCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  cardHeader: {
    backgroundColor: '#0066CC',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  cardHeaderText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  cardContent: {
    padding: 16,
  },
  accountItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  accountName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  balanceTextContainer: {
    flex: 1,
  },
  balanceAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 4,
  },
  balanceLabel: {
    fontSize: 14,
    color: '#666666',
  },
  verticalLine: {
    width: 1,
    height: 40,
    backgroundColor: '#E5E5E5',
    marginLeft: 16,
  },
  creditCardImage: {
    marginBottom: 16,
    width: 100,
    height: 65,
    borderRadius: 8,
    resizeMode: 'cover',
  },
  paymentStatus: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  paymentText: {
    fontSize: 14,
    color: '#000000',
    marginLeft: 8,
  },
  linkAccounts: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E5E5E5',
  },
  linkAccountsText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
  },
  promoCard: {
    backgroundColor: 'white',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    padding: 24,
    marginBottom: 16,
    flexDirection: 'column',
    alignItems: 'center',
  },
  promoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    marginBottom: 20,
  },
  promoLeft: {
    flex: 1,
  },
  promoHeading: {
    fontSize: 16,
    fontWeight: '800',
    color: '#111',
    marginBottom: 4,
  },
  promoTitle: {
    fontSize: 17,
    color: '#000',
    marginBottom: 8,
  },
  promoProvider: {
    fontSize: 14,
    color: '#6B7280',
  },
  progressBarWrapper: {
    width: '100%',
    marginBottom: 20,
  },
  promoButton: {
    alignSelf: 'flex-end',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#0B6BD3',
  },
  promoButtonText: {
    color: '#0B6BD3',
    fontSize: 16,
    fontWeight: '700',
  },
  loadingContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  loadingText: {
    marginTop: 8,
    fontSize: 14,
    color: '#666666',
  },
});

