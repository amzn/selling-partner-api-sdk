<?php
/**
 * ASINIdentifierTest
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
use SpApi\Model\pricing\v0\ASINIdentifier;

/**
 * ASINIdentifierTest Class Doc Comment
 *
 * @category    Class
 * @description Schema to identify an item by MarketPlaceId and ASIN.
 * @package     SpApi
 */
class ASINIdentifierTest extends TestCase
{

    private ASINIdentifier $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ASINIdentifier();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ASINIdentifier"
     */
    public function testASINIdentifier()
    {
        $this->assertInstanceOf(ASINIdentifier::class, $this->model);
    }

    /**
     * Test attribute "marketplace_id"
     */
    public function testPropertyMarketplaceId()
    {
        $testValue = 'test';
        
        $this->model->setMarketplaceId($testValue);
        $this->assertEquals($testValue, $this->model->getMarketplaceId());
    }

    /**
     * Test attribute "asin"
     */
    public function testPropertyAsin()
    {
        $testValue = 'test';
        
        $this->model->setAsin($testValue);
        $this->assertEquals($testValue, $this->model->getAsin());
    }
}
