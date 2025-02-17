<?php
/**
 * ReasonCommentTest
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
use SpApi\Model\fulfillment\inbound\v2024_03_20\ReasonComment;

/**
 * ReasonCommentTest Class Doc Comment
 *
 * @category    Class
 * @description Reason for cancelling or rescheduling a self-ship appointment.
 * @package     SpApi
 */
class ReasonCommentTest extends TestCase
{

    private ReasonComment $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ReasonComment();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ReasonComment"
     */
    public function testReasonComment()
    {
        $this->assertInstanceOf(ReasonComment::class, $this->model);
    }
}
