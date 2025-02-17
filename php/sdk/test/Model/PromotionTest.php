<?php
/**
 * PromotionTest
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
use SpApi\Model\finances\v0\Promotion;

/**
 * PromotionTest Class Doc Comment
 *
 * @category    Class
 * @description A promotion applied to an item.
 * @package     SpApi
 */
class PromotionTest extends TestCase
{

    private Promotion $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new Promotion();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "Promotion"
     */
    public function testPromotion()
    {
        $this->assertInstanceOf(Promotion::class, $this->model);
    }

    /**
     * Test attribute "promotion_type"
     */
    public function testPropertyPromotionType()
    {
        $testValue = 'test';
        
        $this->model->setPromotionType($testValue);
        $this->assertEquals($testValue, $this->model->getPromotionType());
    }

    /**
     * Test attribute "promotion_id"
     */
    public function testPropertyPromotionId()
    {
        $testValue = 'test';
        
        $this->model->setPromotionId($testValue);
        $this->assertEquals($testValue, $this->model->getPromotionId());
    }

    /**
     * Test attribute "promotion_amount"
     */
    public function testPropertyPromotionAmount()
    {
        
        $testValue = new \SpApi\Model\finances\v0\Currency();
        
        $this->model->setPromotionAmount($testValue);
        $this->assertEquals($testValue, $this->model->getPromotionAmount());
    }
}
