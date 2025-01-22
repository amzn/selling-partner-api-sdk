<?php
/**
 * QuoteTest
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
use OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Quote;

/**
 * QuoteTest Class Doc Comment
 *
 * @category    Class
 * @description The estimated shipping cost associated with the transportation option.
 * @package     OpenAPI\Client
 */
class QuoteTest extends TestCase
{

    private Quote $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Quote();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Quote"
     */
    public function testQuote()
    {
        $this->assertInstanceOf(Quote::class, $this->model);
    }

    /**
     * Test attribute "cost"
     */
    public function testPropertyCost()
    {
        
        $testValue = new \OpenAPI\Client\Model\fulfillment\inbound\v2024_03_20\Currency();
        
        $this->model->setCost($testValue);
        $this->assertEquals($testValue, $this->model->getCost());
    }

    /**
     * Test attribute "expiration"
     */
    public function testPropertyExpiration()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setExpiration($testValue);
        $this->assertEquals($testValue, $this->model->getExpiration());
    }

    /**
     * Test attribute "voidable_until"
     */
    public function testPropertyVoidableUntil()
    {
        
        $testValue = new \DateTime();
        
        $this->model->setVoidableUntil($testValue);
        $this->assertEquals($testValue, $this->model->getVoidableUntil());
    }
}
