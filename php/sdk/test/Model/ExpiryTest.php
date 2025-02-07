<?php
/**
 * ExpiryTest
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
use OpenAPI\Client\Model\vendor\shipments\v1\Expiry;

/**
 * ExpiryTest Class Doc Comment
 *
 * @category    Class
 * @description Expiry refers to the collection of dates required  for certain items. These could be either expiryDate or mfgDate and expiryAfterDuration. These are mandatory for perishable items.
 * @package     OpenAPI\Client
 */
class ExpiryTest extends TestCase
{

    private Expiry $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Expiry();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Expiry"
     */
    public function testExpiry()
    {
        $this->assertInstanceOf(Expiry::class, $this->model);
    }

    /**
     * Test attribute "manufacturer_date"
     */
    public function testPropertyManufacturerDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setManufacturerDate($testValue);
        $this->assertEquals($testValue, $this->model->getManufacturerDate());
    }

    /**
     * Test attribute "expiry_date"
     */
    public function testPropertyExpiryDate()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpiryDate($testValue);
        $this->assertEquals($testValue, $this->model->getExpiryDate());
    }

    /**
     * Test attribute "expiry_after_duration"
     */
    public function testPropertyExpiryAfterDuration()
    {
        
        $testValue = new \OpenAPI\Client\Model\vendor\shipments\v1\Duration();
        
        $this->model->setExpiryAfterDuration($testValue);
        $this->assertEquals($testValue, $this->model->getExpiryAfterDuration());
    }
}
