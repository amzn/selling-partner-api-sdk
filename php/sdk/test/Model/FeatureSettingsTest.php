<?php
/**
 * FeatureSettingsTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  SpApi
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace SpApi\Test\Model;

use PHPUnit\Framework\TestCase;
use SpApi\Model\fulfillment\outbound\v2020_07_01\FeatureSettings;

/**
 * FeatureSettingsTest Class Doc Comment
 *
 * @category    Class
 * @description &#x60;FeatureSettings&#x60; allows users to apply fulfillment features to an order. To block an order from being shipped using Amazon Logistics (AMZL) and an AMZL tracking number, use &#x60;featureName&#x60; as &#x60;BLOCK_AMZL&#x60; and &#x60;featureFulfillmentPolicy&#x60; as &#x60;Required&#x60;. Blocking AMZL will incur an additional fee surcharge on your MCF orders and increase the risk of some of your orders being unfulfilled or delivered late if there are no alternative carriers available. Using &#x60;BLOCK_AMZL&#x60; in an order request will take precedence over your Seller Central account setting. To ship in non-Amazon branded packaging (blank boxes), use featureName &#x60;BLANK_BOX&#x60;.
 * @package     SpApi
 */
class FeatureSettingsTest extends TestCase
{

    private FeatureSettings $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new FeatureSettings();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "FeatureSettings"
     */
    public function testFeatureSettings()
    {
        $this->assertInstanceOf(FeatureSettings::class, $this->model);
    }

    /**
     * Test attribute "feature_name"
     */
    public function testPropertyFeatureName()
    {
        $testValue = 'test';
        
        $this->model->setFeatureName($testValue);
        $this->assertEquals($testValue, $this->model->getFeatureName());
    }

    /**
     * Test attribute "feature_fulfillment_policy"
     */
    public function testPropertyFeatureFulfillmentPolicy()
    {
        $enumInstance = new FeatureSettings();
        $allowedValues = $enumInstance->getFeatureFulfillmentPolicyAllowableValues();
        $testValue = reset($allowedValues);
        $this->model->setFeatureFulfillmentPolicy($testValue);
        $this->assertEquals($testValue, $this->model->getFeatureFulfillmentPolicy());
    }
}
