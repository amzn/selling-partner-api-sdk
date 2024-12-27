<?php
/**
 * AvailableDeliveryExperienceOptionTest
 *
 * PHP version 7.4
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\merchantfulfillment\AvailableDeliveryExperienceOption;

/**
 * AvailableDeliveryExperienceOptionTest Class Doc Comment
 *
 * @category    Class
 * @description The available delivery confirmation options, and the fee charged, if any.
 * @package     OpenAPI\Client
 */
class AvailableDeliveryExperienceOptionTest extends TestCase
{

    private AvailableDeliveryExperienceOption $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new AvailableDeliveryExperienceOption();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "AvailableDeliveryExperienceOption"
     */
    public function testAvailableDeliveryExperienceOption()
    {
        $this->assertInstanceOf(AvailableDeliveryExperienceOption::class, $this->model);
    }

    /**
     * Test attribute "delivery_experience_option"
     */
    public function testPropertyDeliveryExperienceOption()
    {
        $enumInstance = new \OpenAPI\Client\Model\merchantfulfillment\DeliveryExperienceOption();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setDeliveryExperienceOption($testValue);
        $this->assertEquals($testValue, $this->model->getDeliveryExperienceOption());
    }

    /**
     * Test attribute "charge"
     */
    public function testPropertyCharge()
    {
        
        $testValue = new \OpenAPI\Client\Model\merchantfulfillment\CurrencyAmount();
        
        $this->model->setCharge($testValue);
        $this->assertEquals($testValue, $this->model->getCharge());
    }
}
