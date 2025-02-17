<?php
/**
 * OriginTest
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
use SpApi\Model\fulfillment\outbound\v2020_07_01\Origin;

/**
 * OriginTest Class Doc Comment
 *
 * @category    Class
 * @description The origin for the delivery offer.
 * @package     SpApi
 */
class OriginTest extends TestCase
{

    private Origin $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Origin();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Origin"
     */
    public function testOrigin()
    {
        $this->assertInstanceOf(Origin::class, $this->model);
    }

    /**
     * Test attribute "country_code"
     */
    public function testPropertyCountryCode()
    {
        $testValue = 'test';
        
        $this->model->setCountryCode($testValue);
        $this->assertEquals($testValue, $this->model->getCountryCode());
    }
}
