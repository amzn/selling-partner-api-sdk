<?php
/**
 * SellerFeedbackTypeTest
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
use SpApi\Model\pricing\v0\SellerFeedbackType;

/**
 * SellerFeedbackTypeTest Class Doc Comment
 *
 * @category    Class
 * @description Information about the seller&#39;s feedback, including the percentage of positive feedback, and the total number of ratings received.
 * @package     SpApi
 */
class SellerFeedbackTypeTest extends TestCase
{

    private SellerFeedbackType $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new SellerFeedbackType();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "SellerFeedbackType"
     */
    public function testSellerFeedbackType()
    {
        $this->assertInstanceOf(SellerFeedbackType::class, $this->model);
    }

    /**
     * Test attribute "seller_positive_feedback_rating"
     */
    public function testPropertySellerPositiveFeedbackRating()
    {
        
        $testValue = new float();
        
        $this->model->setSellerPositiveFeedbackRating($testValue);
        $this->assertEquals($testValue, $this->model->getSellerPositiveFeedbackRating());
    }

    /**
     * Test attribute "feedback_count"
     */
    public function testPropertyFeedbackCount()
    {
        
        $testValue = new int();
        
        $this->model->setFeedbackCount($testValue);
        $this->assertEquals($testValue, $this->model->getFeedbackCount());
    }
}
