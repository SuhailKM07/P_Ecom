import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import { GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';

export default function BTMSheet() {
  const refRBSheet = useRef();

  // Handler for gesture detection
  const handleGesture: (event: any) => any = (event) => {
    console.log(event.nativeEvent)
    if (event.nativeEvent.translationY < -50) {
      // Swipe up detected (translationY is negative)
      refRBSheet?.current?.open();
    }
    return event
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{
        flex: 1,
        justifyContent: 'flex-end'
      }}>
        <PanGestureHandler onGestureEvent={handleGesture}>
          <View style={styles.Container}>
            <Text style={styles.instructionText}>Swipe up from the bottom to open the sheet!</Text>
          </View>
        </PanGestureHandler>
      </View>

      {/* Bottom Sheet */}
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true} // Close when tapping outside the sheet
        customStyles={{
          wrapper: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
          },
          container: {
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            paddingHorizontal: 20,
          },
          draggableIcon: {
            backgroundColor: 'red',
          },
        }}>
        <View>
          <Text style={styles.contentText}>Hello! Swipe down to close.</Text>
        </View>
      </RBSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  Container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: 'green'
  },
  instructionText: {
    fontSize: 16,
    color: '#888',
  },
  contentText: {
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 20,
  },
});
