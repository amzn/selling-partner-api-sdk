<?php
/**
 * ContentStatusTest
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
use SpApi\Model\aplusContent\v2020_11_01\ContentStatus;

/**
 * ContentStatusTest Class Doc Comment
 *
 * @category    Class
 * @description The submission status of the content document.
 * @package     SpApi
 */
class ContentStatusTest extends TestCase
{

    private ContentStatus $model;

    /**
     * Setup before running each test case
     */
    public function setUp(): void
    {
        $this->model = new ContentStatus();
    }

    /**
     * Clean up after running each test case
     */
    public function tearDown(): void
    {
        unset($this->model);
    }

    /**
     * Test "ContentStatus"
     */
    public function testContentStatus()
    {
        $this->assertInstanceOf(ContentStatus::class, $this->model);
    }
}
