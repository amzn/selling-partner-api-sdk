<?php
/**
 * OfferProgramConfigurationPreferencesTest
 *
 * PHP version 8.3
 *
 * @category Class
 * @package  OpenAPI\Client
 * @author   OpenAPI Generator team
 * @link     https://openapi-generator.tech
 */

namespace OpenAPI\Client\Test\Model;

use PHPUnit\Framework\TestCase;
use OpenAPI\Client\Model\replenishment\OfferProgramConfigurationPreferences;

/**
 * OfferProgramConfigurationPreferencesTest Class Doc Comment
 *
 * @category    Class
 * @description An object which contains the preferences applied to the offer.
 * @package     OpenAPI\Client
 */
class OfferProgramConfigurationPreferencesTest extends TestCase
{

    private OfferProgramConfigurationPreferences $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new OfferProgramConfigurationPreferences();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "OfferProgramConfigurationPreferences"
     */
    public function testOfferProgramConfigurationPreferences()
    {
        $this->assertInstanceOf(OfferProgramConfigurationPreferences::class, $this->model);
    }

    /**
     * Test attribute "auto_enrollment"
     */
    public function testPropertyAutoEnrollment()
    {
        $enumInstance = new \OpenAPI\Client\Model\replenishment\AutoEnrollmentPreference();
        $allowedValues = $enumInstance->getAllowableEnumValues();
        $testValue = reset($allowedValues);
        
        $this->model->setAutoEnrollment($testValue);
        $this->assertEquals($testValue, $this->model->getAutoEnrollment());
    }
}
