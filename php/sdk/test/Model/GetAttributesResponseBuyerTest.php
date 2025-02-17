<?php
/**
 * GetAttributesResponseBuyerTest
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
use SpApi\Model\messaging\v1\GetAttributesResponseBuyer;

/**
 * GetAttributesResponseBuyerTest Class Doc Comment
 *
 * @category    Class
 * @description The list of attributes related to the buyer.
 * @package     SpApi
 */
class GetAttributesResponseBuyerTest extends TestCase
{

    private GetAttributesResponseBuyer $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new GetAttributesResponseBuyer();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "GetAttributesResponseBuyer"
     */
    public function testGetAttributesResponseBuyer()
    {
        $this->assertInstanceOf(GetAttributesResponseBuyer::class, $this->model);
    }

    /**
     * Test attribute "locale"
     */
    public function testPropertyLocale()
    {
        $testValue = 'test';
        
        $this->model->setLocale($testValue);
        $this->assertEquals($testValue, $this->model->getLocale());
    }
}
