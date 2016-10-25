
#import "RCTViewManager.h"

@interface RCTMappManager : RCTViewManager
@end


@implementation RCTMappManager

RCT_EXPORT_MODULE()

RCT_CUSTOM_VIEW_PROPERTY(titleLabel, NSString, UIButton){
  NSString *str = [RCTConvert NSString:json];
  [view setTitle:str forState:UIControlStateNormal];
}

- (UIView *)view
{
  UIButton *button = [[UIButton alloc] init];
  return button;
}

@end
