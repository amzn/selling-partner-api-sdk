<?php
/**
 * InboundPreferencesTest
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
use SpApi\Model\awd\v2024_05_09\InboundPreferences;

/**
 * InboundPreferencesTest Class Doc Comment
 *
 * @category    Class
 * @description Preferences that can be passed in context of an inbound order
 * @package     SpApi
 */
class InboundPreferencesTest extends TestCase
{

    private InboundPreferences $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new InboundPreferences();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "InboundPreferences"
     */
    public function testInboundPreferences()
    {
        $this->assertInstanceOf(InboundPreferences::class, $this->model);
    }

    /**
     * Test attribute "destination_region"
     */
    public function testPropertyDestinationRegion()
    {
        $testValue = 'test';
        
        $this->model->setDestinationRegion($testValue);
        $this->assertEquals($testValue, $this->model->getDestinationRegion());
    }
}
